import React from "react";
import { FieldProps } from "../../types";
type SwitchFieldProps = FieldProps<boolean>;
/**
 * Simple boolean switch.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare const SwitchFieldBinding: React.ForwardRefExoticComponent<SwitchFieldProps & React.RefAttributes<unknown>>;
export {};
