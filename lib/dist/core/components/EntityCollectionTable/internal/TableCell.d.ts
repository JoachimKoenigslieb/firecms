import React from "react";
import { TableSize } from "../../Table";
interface TableCellProps {
    children: React.ReactNode;
    /**
     * The value is used only to check changes and force re-renders
     */
    value?: any;
    disabled: boolean;
    saved?: boolean;
    error?: Error;
    allowScroll?: boolean;
    align: "right" | "left" | "center";
    size: TableSize;
    disabledTooltip?: string;
    width: number;
    focused: boolean;
    showExpandIcon?: boolean;
    removePadding?: boolean;
    fullHeight?: boolean;
    selected?: boolean;
    selectedRow: boolean;
    onSelect?: (cellRect: DOMRect | undefined) => void;
    openPopup?: (cellRect: DOMRect | undefined) => void;
}
export declare const TableCell: React.FunctionComponent<TableCellProps>;
export {};
