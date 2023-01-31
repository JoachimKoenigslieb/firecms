import { Entity, EntityCollection } from "../../../../../types";
import { CustomFieldValidator } from "../../../../../form/validation";
import { OnCellValueChangeParams } from "../../types";
interface PopupFormFieldProps<M extends Record<string, any>> {
    entity?: Entity<M>;
    customFieldValidator?: CustomFieldValidator;
    path: string;
    tableKey: string;
    propertyKey?: keyof M;
    collection?: EntityCollection<M>;
    cellRect?: DOMRect;
    open: boolean;
    onClose: () => void;
    columnIndex?: number;
    /**
     * Callback when the value of a cell has been edited
     * @param params
     */
    onCellValueChange?: (params: OnCellValueChangeParams<any, M>) => Promise<void>;
}
export declare function PopupFormField<M extends Record<string, any>>(props: PopupFormFieldProps<M>): import("@emotion/react/jsx-runtime").JSX.Element | null;
export declare function PopupFormFieldInternal<M extends Record<string, any>>({ tableKey, entity, customFieldValidator, propertyKey, collection: inputCollection, path, cellRect, open, onClose, columnIndex, onCellValueChange }: PopupFormFieldProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
