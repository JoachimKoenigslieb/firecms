import React from "react";
export declare function useNavigationUnsavedChangesDialog(when: boolean, onSuccess: () => void): {
    navigationWasBlocked: boolean;
    handleCancel: () => void;
    handleOk: () => void;
};
export interface UnsavedChangesDialogProps {
    open: boolean;
    body?: React.ReactNode;
    title?: string;
    handleOk: () => void;
    handleCancel: () => void;
}
export declare function UnsavedChangesDialog({ open, handleOk, handleCancel, body, title }: UnsavedChangesDialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
