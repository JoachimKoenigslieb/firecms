import { TableEnumValues, TableWhereFilterOp } from "../VirtualTableProps";
interface StringNumberFilterFieldProps {
    name: string;
    dataType: "string" | "number";
    value?: [op: TableWhereFilterOp, fieldValue: any];
    setValue: (value?: [op: TableWhereFilterOp, newValue: any]) => void;
    isArray?: boolean;
    enumValues?: TableEnumValues;
    title?: string;
}
export declare function StringNumberFilterField({ name, value, setValue, dataType, isArray, enumValues, title }: StringNumberFilterFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
