import { IRouterPaths } from './router';

export interface HeadProps {
  title: string;
}

export interface LinkProps {
  name: string;
  path: IRouterPaths;
  badgeContent?: number;
}

export interface IconProps {
  pathName: IRouterPaths;
}

export interface BadgeBoxProps {
  children: React.ReactNode;
  badgeContent?: number;
}