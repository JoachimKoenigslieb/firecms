import { EntityReference, FieldProps } from "../../types";
type ArrayOfReferencesFieldProps = FieldProps<EntityReference[]>;
/**
 * This field allows selecting multiple references.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayOfReferencesFieldBinding({ propertyKey, value, error, showError, isSubmitting, tableMode, property, includeDescription, setValue }: ArrayOfReferencesFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
