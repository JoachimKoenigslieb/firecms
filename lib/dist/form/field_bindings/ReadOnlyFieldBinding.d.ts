import { FieldProps } from "../../types";
/**
 *
 * Simply render the non-editable preview of a field
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ReadOnlyFieldBinding({ propertyKey, value, setValue, error, showError, isSubmitting, touched, tableMode, property, includeDescription, context }: FieldProps<any>): import("@emotion/react/jsx-runtime").JSX.Element;
