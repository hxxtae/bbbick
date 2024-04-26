import { IRouterPaths } from './router';

export interface HeadProps {
  title: string;
}

export interface LinkProps {
  name: string;
  path: IRouterPaths;
}

export interface IconProps {
  pathName: IRouterPaths;
}