// utils/useDeviceDetect.js
import { useMemo } from "react";

export default function useDevice() {
  const arg = typeof window !== 'undefined' ? navigator : null;
  const isMobile = useMemo(() => {
    const userAgent =
      typeof window !== 'undefined' &&
      typeof window.navigator !== "undefined"
        ? navigator.userAgent
        : '';
    return Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }, [arg]);

  return { isMobile };
}