import React, { RefObject } from "react";
import { TableColumn, TableSort, TableWhereFilterOp } from "./VirtualTableProps";
type VirtualTableHeaderProps<M extends Record<string, any>> = {
    resizeHandleRef: RefObject<HTMLDivElement>;
    columnIndex: number;
    isResizingIndex: number;
    column: TableColumn;
    onColumnSort: (key: Extract<keyof M, string>) => void;
    filter?: [TableWhereFilterOp, any];
    sort: TableSort;
    onFilterUpdate: (column: TableColumn, filterForProperty?: [TableWhereFilterOp, any]) => void;
    onClickResizeColumn?: (columnIndex: number, column: TableColumn) => void;
};
export declare const VirtualTableHeader: React.FunctionComponent<VirtualTableHeaderProps<any>>;
export {};
