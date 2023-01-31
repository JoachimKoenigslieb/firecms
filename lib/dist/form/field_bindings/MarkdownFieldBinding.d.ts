import { FieldProps } from "../../types";
/**
 * Render a markdown field that allows edition and seeing the preview.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function MarkdownFieldBinding({ propertyKey, value, setValue, error, showError, disabled, autoFocus, touched, property, tableMode, includeDescription, context, shouldAlwaysRerender }: FieldProps<string>): import("@emotion/react/jsx-runtime").JSX.Element;
