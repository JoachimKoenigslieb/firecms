import React from "react";
/**
 * @category Components
 */
export interface ErrorViewProps {
    title?: string;
    error: Error | React.ReactElement | string;
    tooltip?: string;
}
/**
 * Generic error view. Displayed for example when an unexpected value comes
 * from the datasource in a collection view.
 * @param title
 * @param error
 * @param tooltip
 * @constructor
 * @category Components
 */
export declare function ErrorView({ title, error, tooltip }: ErrorViewProps): React.ReactElement;
