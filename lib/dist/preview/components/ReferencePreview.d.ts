import * as React from "react";
import { EntityReference } from "../../types";
import { PreviewSize } from "../index";
export type ReferencePreviewProps = {
    disabled: boolean;
    reference: EntityReference;
    size: PreviewSize;
    previewProperties?: string[];
    onClick?: () => void;
    onHover?: boolean;
};
/**
 * @category Preview components
 */
export declare const ReferencePreview: React.FunctionComponent<ReferencePreviewProps>;
