import React from "react";
export interface SideDialogDrawerProps {
    /**
     * The contents of the drawer.
     */
    children: React.ReactNode;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: (force: boolean) => void;
    /**
     * If `true`, the drawer is open.
     */
    open: boolean;
    /**
     * The offset position of this view determines if it needs to be translated
     * when nested
     */
    offsetPosition: number;
}
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */
export declare const SideDialogDrawer: React.ForwardRefExoticComponent<SideDialogDrawerProps & React.RefAttributes<HTMLDivElement>>;
