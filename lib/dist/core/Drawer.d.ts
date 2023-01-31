import React from "react";
import { SvgIconTypeMap } from "@mui/material";
/**
 * Props used in case you need to override the default drawer
 * @category Core
 */
export type DrawerProps<T = {}> = T & {
    drawerOpen: boolean;
    closeDrawer: () => any;
};
/**
 * Default drawer used in the CMS
 * @category Core
 */
export declare function Drawer({ drawerOpen, closeDrawer }: DrawerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function DrawerNavigationItem({ name, Icon, drawerOpen, tooltipsOpen, url, onClick }: {
    Icon: React.ComponentType<SvgIconTypeMap["props"]>;
    name: string;
    tooltipsOpen: boolean;
    drawerOpen: boolean;
    url: string;
    onClick?: () => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
