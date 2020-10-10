import 'styled-components';
import { theme } from '../../components';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends Theme {}
}
