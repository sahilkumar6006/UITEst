/**
 * Hook to determine if the app is in RTL mode
 * @file useIsRTL.ts
 */

import { useTranslation } from 'react-i18next';

/**
 * Hook to check if current language is RTL
 * @returns boolean indicating if layout should be RTL
 */
const useIsRTL = (): boolean => {
  const { i18n } = useTranslation();
  return i18n.dir() === 'rtl';
};

export default useIsRTL;

