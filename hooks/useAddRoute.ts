import { useEffect } from 'react';
import { addRoute, Route } from '../service/Router$';


const useDelay = (route: Route) => {
  useEffect(() => {
    addRoute(route);
  }, []);
}

export default useDelay;