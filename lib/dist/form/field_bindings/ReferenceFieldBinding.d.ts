import { EntityReference, FieldProps } from "../../types";
/**
 * Field that opens a reference selection dialog.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ReferenceFieldBinding<M extends Record<string, any>>(props: FieldProps<EntityReference>): import("@emotion/react/jsx-runtime").JSX.Element;
