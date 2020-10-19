import styled from 'styled-components';
import { CharRaw } from './CharRaw';

const size = '9rem';

export const Char = styled(CharRaw)`
  display: grid;

  justify-content: center;
  justify-items: center;
  align-items: center;
  vertical-align: center;
  text-align: center;
  color: ${({ theme }) => theme.presetA.palette.background.b1};

  background: ${({ theme }) => theme.presetA.palette.secondary.default};
  height: ${size};
  width: ${size};

  font-size: ${({ theme }) => theme.font.size.h1.size};
  line-height: ${({ theme }) => theme.font.size.h1.height};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  font-family: ${({ theme }) => theme.font.family};
  text-shadow: ${({ theme }) => theme.font.shadow.default};

  border-style: solid;
  border-radius: ${({ theme }) => theme.presetA.border.radius.small};
  border-width: ${({ theme }) => theme.presetA.border.size.medium};
  border-color: ${({ theme }) => theme.presetA.border.color.soft};
  box-shadow: ${({ theme }) => theme.presetA.border.shadow.small};
`;
