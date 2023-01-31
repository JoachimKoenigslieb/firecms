import { FieldProps } from "../../types";
/**
 * If the `oneOf` property is specified, this fields render each array entry as
 * a `type` select and the corresponding field widget to the selected `type.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function BlockFieldBinding<T extends Array<any>>({ propertyKey, value, error, showError, isSubmitting, setValue, tableMode, property, includeDescription, underlyingValueHasChanged, context, disabled, shouldAlwaysRerender }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
