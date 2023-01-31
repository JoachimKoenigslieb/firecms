import React from "react";
export type SideDialogContextProps = {
    blocked: boolean;
    setBlocked: (blocked: boolean) => void;
    setBlockedNavigationMessage: (message?: React.ReactNode) => void;
    width?: string;
    close: (force?: boolean) => void;
};
/**
 * This hook is used to access the properties of a particular side dialog,
 * in contrast with {@link useSideDialogsController} which handles the
 * state of all the dialogs.
 */
export declare const useSideDialogContext: () => SideDialogContextProps;
/**
 * This is the component in charge of rendering the side dialogs used
 * for editing entities. Use the {@link useSideEntityController} to open
 * and control the dialogs.
 * This component needs a parent {@link FireCMS}
 * {@link useSideDialogsController}
 * @category Components
 */
export declare function SideDialogs(): import("@emotion/react/jsx-runtime").JSX.Element;
