import { ReactNode } from "react";

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TAdminPath = {
  path: string;
  element: ReactNode;
};

export type TSideBarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSideBarItem[];
    }
  | undefined;
