import React from 'react';
import { IWithClassName } from '../../interfaces';

interface IHomePageProps extends IWithClassName {
  text: string;
}

export const HomePageRaw = ({ text, className }: IHomePageProps) => {
  return <div className={className}>{text}</div>;
};
