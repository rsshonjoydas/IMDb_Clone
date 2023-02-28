import { IconType } from 'react-icons';
import { Url } from './index.d';

type MenuItemTypes = {
  id?: number;
  title: string;
  path: Url;
  Icon: IconType;
  tooltip?: string;
};

export default MenuItemTypes;
