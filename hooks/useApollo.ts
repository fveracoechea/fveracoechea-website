import { NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react"
import { initializeApollo } from '../service/ApolloClient$';

const useApollo = (initialState: NormalizedCacheObject | null = null) => {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}

export default useApollo;