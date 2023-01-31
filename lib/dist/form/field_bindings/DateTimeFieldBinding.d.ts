import { FieldProps } from "../../types";
type DateTimeFieldProps = FieldProps<Date>;
/**
 * Field that allows selecting a date
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function DateTimeFieldBinding({ propertyKey, value, setValue, autoFocus, error, showError, disabled, touched, property, includeDescription, shouldAlwaysRerender }: DateTimeFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
