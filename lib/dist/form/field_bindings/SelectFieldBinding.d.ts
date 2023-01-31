import { EnumType, FieldProps } from "../../types";
type SelectProps<T extends EnumType> = FieldProps<T>;
/**
 * If `enumValues` are set in the string config, this field renders a select
 * where each option is a colored chip.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function SelectFieldBinding<T extends EnumType>({ propertyKey, value, setValue, error, showError, disabled, autoFocus, touched, property, includeDescription, shouldAlwaysRerender }: SelectProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
