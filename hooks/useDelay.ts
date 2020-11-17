import { useEffect } from 'react';


const useDelay = <F extends Function>(delay: number, action: F) => {
  useEffect(() => { setTimeout(() => action(), delay) }, []);
}

export default useDelay;