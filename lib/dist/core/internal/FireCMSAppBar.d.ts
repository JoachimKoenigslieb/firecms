import React from "react";
interface FireCMSAppBarProps {
    title: string;
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
    drawerOpen: boolean;
}
export declare const FireCMSAppBar: ({ title, toolbarExtraWidget, drawerOpen }: FireCMSAppBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
