import React from "react";
import { CellRendererParams, TableColumn } from "./VirtualTableProps";
type VirtualTableCellProps<T extends any> = {
    dataKey: string;
    column: TableColumn;
    columns: TableColumn[];
    rowData: any;
    cellData: any;
    rowIndex: any;
    columnIndex: number;
    cellRenderer: (params: CellRendererParams<T>) => React.ReactNode;
};
export declare const VirtualTableCell: React.NamedExoticComponent<VirtualTableCellProps<any>>;
export {};
