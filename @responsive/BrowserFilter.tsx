import React from 'react';
import { IWithChildren } from '../@common-contracts';
import { DeviceType } from './DeviceType';
import { useDeviceDetect } from './useDeviceDetect';

export const BrowserFilter = ({ children }: IWithChildren) => {
  const { deviceType } = useDeviceDetect();
  return <>{deviceType === DeviceType.browser && children}</>;
};
