import { FieldProps } from "../../types";
/**
 * Field that renders the children property fields
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function MapFieldBinding<T extends Record<string, any>>({ propertyKey, value, showError, disabled, property, setValue, tableMode, includeDescription, underlyingValueHasChanged, autoFocus, shouldAlwaysRerender, context }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
