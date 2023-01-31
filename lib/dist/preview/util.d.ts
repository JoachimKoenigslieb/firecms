import { CollectionSize } from "../types";
import { PreviewSize } from "./index";
export declare const TINY_THUMBNAIL = 40;
export declare const SMALL_THUMBNAIL = 100;
export declare const REGULAR_THUMBNAIL = 200;
export declare function getThumbnailMeasure(size: PreviewSize): number;
export declare function getPreviewSizeFrom(size: CollectionSize): PreviewSize;
