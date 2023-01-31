import React from "react";
import { PreviewSize } from "../index";
type StorageThumbnailProps = {
    storagePathOrDownloadUrl: string;
    storeUrl: boolean;
    size: PreviewSize;
};
/**
 * @category Preview components
 */
export declare const StorageThumbnail: React.FunctionComponent<StorageThumbnailProps>;
export declare function StorageThumbnailInternal({ storeUrl, storagePathOrDownloadUrl, size }: StorageThumbnailProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
export {};
