import { MutableRefObject, useCallback, useRef, useState } from 'react';
import * as io from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/pipeable';
import { ask, chain, Reader, map } from 'fp-ts/lib/Reader'
import { fromPredicate, fold, fromNullable } from 'fp-ts/lib/Option';

const ioVoid: io.IO<void> = () => {}

type Dependencies = {
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
  unobserveOnEnter: boolean,
  onLeave: io.IO<void>,
  onEnter: io.IO<void>
}

const inViewReader: Reader<Dependencies, boolean> = ({
  entry,
  observer
}) => observer.thresholds.some(t => entry.intersectionRatio >= t) && entry.isIntersecting;

const callbackIO = (isInView: boolean): Reader<Dependencies, boolean> => ({ onLeave, onEnter }) => {
  pipe(
    fromPredicate((inView: boolean) => inView)(isInView),
    fold(
      onLeave,
      onEnter
    )
  );
  return isInView
}

const disconnectReader = (isInView: boolean): Reader<Dependencies, void> => ({ entry, observer, unobserveOnEnter }) => {
  return pipe(
    fromPredicate((inView: boolean) => inView)(isInView && unobserveOnEnter),
    fold(
      ioVoid,
      () => {
        observer.unobserve(entry.target)
        observer.disconnect();
      }
    )
  );
}

const clearObserver = (
  observer: MutableRefObject<IntersectionObserver | null>,
  target: MutableRefObject<Element | null>
): io.IO<void> => () => pipe(
  fromPredicate(({ target, observer }) => target.current && observer.current)({ target, observer }),
  fold(
    ioVoid,
    () => {
      observer.current!.unobserve(target.current!);
      observer.current!.disconnect();
      observer.current = null;
    }
));

const setNode = (
  node: HTMLElement | null,
  observer: MutableRefObject<IntersectionObserver | null>,
  target: MutableRefObject<Element | null>,
  obsCallback: IntersectionObserverCallback,
  threshold: number
): io.IO<void> => () => pipe(
  fromNullable(node),
  fold(
    ioVoid,
    n => {
      observer.current = new IntersectionObserver(obsCallback, { threshold });
      observer.current.observe(n);
      target.current = n;
    }
))

const useInView = ({
  onEnter = ioVoid,
  onLeave = ioVoid,
  threshold = 0.5,
  unobserveOnEnter = true
}) => {
  const target = useRef<Element | null>(null)
  const observer = useRef<IntersectionObserver | null>(null);
  const [inView, setInView] = useState(false);

  const setInViewIO = (isInView: boolean) => {
    setInView(isInView);
    return isInView;
  };

  const obsCallback = useCallback<IntersectionObserverCallback>(([entry], observer) => {
    const computations = pipe(
      inViewReader,
      map(setInViewIO),
      chain(callbackIO),
      chain(disconnectReader)
    );
    computations({ entry, observer, unobserveOnEnter, onLeave, onEnter });
  }, [inView, unobserveOnEnter, onEnter, onLeave, threshold])

  const ref = useCallback((node: HTMLElement | null) => {
    const computations = pipe(
      clearObserver(observer, target),
      io.chain(() => setNode(node, observer, target, obsCallback, threshold))
    );
    computations();
  }, [target, threshold, target, observer]);

  return { ref, inView };
}

export default useInView;
