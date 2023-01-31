import { PreviewSize } from "../index";
/**
 * @category Preview components
 */
export interface ImagePreviewProps {
    size: PreviewSize;
    url: string;
}
/**
 * @category Preview components
 */
export declare function ImagePreview({ size, url }: ImagePreviewProps): import("@emotion/react/jsx-runtime").JSX.Element;
