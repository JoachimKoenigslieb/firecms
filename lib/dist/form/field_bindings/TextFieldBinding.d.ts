import { FieldProps } from "../../types";
interface TextFieldProps<T extends string | number> extends FieldProps<T> {
    allowInfinity?: boolean;
}
/**
 * Generic text field.
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function TextFieldBinding<T extends string | number>({ propertyKey, value, setValue, error, showError, disabled, autoFocus, property, includeDescription, allowInfinity, shouldAlwaysRerender }: TextFieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
