import { useLocation } from 'react-router-dom';

const useCurrentPath = (): string => {
  const location = useLocation();
  return location.pathname;
};

export { useCurrentPath };
