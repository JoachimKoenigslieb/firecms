import React from "react";
export declare function DeleteConfirmationDialog({ open, onAccept, onCancel, title, loading, body }: {
    open: boolean;
    onAccept: () => void;
    onCancel: () => void;
    loading?: boolean;
    title: React.ReactNode;
    body?: React.ReactNode;
}): import("@emotion/react/jsx-runtime").JSX.Element;
