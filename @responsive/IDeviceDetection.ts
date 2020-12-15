import { DeviceType } from './DeviceType';

/**
 * Detection contract
 */
export interface IDeviceDetection {
  /**
   * the device type
   */
  deviceType: DeviceType;

  /**
   * Add mobile-view or browser-view class name according to the device detection
   */
  appendDeviceClass: (className?: string) => string;
}
