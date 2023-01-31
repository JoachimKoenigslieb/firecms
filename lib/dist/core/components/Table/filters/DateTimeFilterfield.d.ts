import { TableWhereFilterOp } from "../VirtualTableProps";
interface DateTimeFilterFieldProps {
    name: string;
    mode?: "date" | "date_time";
    value?: [op: TableWhereFilterOp, fieldValue: any];
    setValue: (value?: [op: TableWhereFilterOp, newValue: any]) => void;
    isArray?: boolean;
    title?: string;
}
export declare function DateTimeFilterField({ name, isArray, mode, value, setValue, title }: DateTimeFilterFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
