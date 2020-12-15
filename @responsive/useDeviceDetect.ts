import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';
import { ResponsiveConstants } from '.';
import { isDev } from '../@dev-tools';
import { DeviceType } from './DeviceType';
import { IDeviceDetection } from './IDeviceDetection';

/**
 * Mobile detection
 */
export const useDeviceDetect = (): IDeviceDetection => {
  // used for dev time
  const isMobileQuery = useMediaQuery({
    // maxDeviceWidth: 767,
    maxWidth: ResponsiveConstants.mobileMaxWidth,
    orientation: 'portrait',
  });

  const deviceType =
    (isDev() && isMobileQuery) || isMobile
      ? DeviceType.mobile
      : DeviceType.browser;

  return {
    deviceType,
    appendDeviceClass: (cls?: string) =>
      cls ? `${cls} ${deviceType}` : deviceType,
  };
};
