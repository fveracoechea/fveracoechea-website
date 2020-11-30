import { BehaviorSubject } from 'rxjs';

export type Route = {
  name: string,
  path: string,
  icon: string,
  order: number,
  target?: string
}

export const initialState: Route[] = [
  {
    name: 'Home',
    path: '#home',
    icon: 'home',
    order: 1,
  },
  {
    name: 'About Me',
    path: '#about_me',
    icon: 'information_outline',
    order: 2,
  },
  {
    name: 'Skills',
    path: '#skills',
    icon: 'code',
    order: 3,
  }
];

export const router$ = new BehaviorSubject<Route[]>(initialState);

export const addRoute = (route: Route) => {
  const data = router$.getValue();
  router$.next([
    ...data,
    route
  ])
}
