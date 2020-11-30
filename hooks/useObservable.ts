import { Observable } from 'rxjs'
import { useEffect, useState } from 'react'

const useObservable = <T>(obs: Observable<T>, init: T) => {
  const [value, setValue] = useState<T>(init);
  const [error, setErrorState] = useState<Error | null>(null);
  const [isCompleted, setCompleted] = useState<boolean>(false);
  
  useEffect(() => {
    const sub = obs.subscribe(
      setValue,
      setErrorState,
      () => setCompleted(true)
    );
    return () => sub.unsubscribe();
  });

  return {
    value, error, isCompleted
  };
}

export default useObservable;