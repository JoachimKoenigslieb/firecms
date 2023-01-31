import React from "react";
import { PreviewSize } from "../index";
import { PreviewType } from "../../types";
/**
 * @category Preview components
 */
export declare function UrlComponentPreview({ url, previewType, size, hint }: {
    url: string;
    previewType?: PreviewType;
    size: PreviewSize;
    hint?: string;
}): React.ReactElement;
