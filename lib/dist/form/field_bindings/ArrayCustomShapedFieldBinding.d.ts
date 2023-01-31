import { FieldProps } from "../../types";
/**
 * Array field used for custom
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayCustomShapedFieldBinding<T extends Array<any>>({ propertyKey, value, error, showError, isSubmitting, setValue, tableMode, property, includeDescription, underlyingValueHasChanged, context, disabled, shouldAlwaysRerender }: FieldProps<T, any, any>): import("@emotion/react/jsx-runtime").JSX.Element;
