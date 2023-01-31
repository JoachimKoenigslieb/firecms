import React from "react";
interface OutsideAlerterProps {
    children: React.ReactNode;
    enabled: boolean;
    onOutsideClick: () => void;
}
/**
 * Component that alerts if you click outside of it
 */
export declare function OutsideAlerter({ children, enabled, onOutsideClick }: OutsideAlerterProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
