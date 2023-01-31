import React from "react";
import { CollectionSize } from "../../../../types";
interface CollectionTableToolbarProps {
    size: CollectionSize;
    filterIsSet: boolean;
    loading: boolean;
    forceFilter: boolean;
    actionsStart?: React.ReactNode;
    actions?: React.ReactNode;
    title?: React.ReactNode;
    onTextSearch?: (searchString?: string) => void;
    onSizeChanged: (size: CollectionSize) => void;
    clearFilter: () => void;
}
export declare function CollectionTableToolbar<M extends Record<string, any>>(props: CollectionTableToolbarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
