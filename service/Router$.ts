import { BehaviorSubject } from 'rxjs';

export type Route = {
  name: string,
  path: string,
  icon: string,
  order: number,
}

export const router$ = new BehaviorSubject<Route[]>([]);

export const addRoute = (route: Route) => {
  const data = router$.getValue();
  router$.next([
    ...data,
    route
  ])
}
