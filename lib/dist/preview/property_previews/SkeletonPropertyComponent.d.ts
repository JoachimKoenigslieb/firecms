import { ResolvedProperty } from "../../types";
import { PreviewSize } from "../index";
export interface SkeletonPropertyComponentProps {
    property: ResolvedProperty;
    size: PreviewSize;
}
/**
 * @category Preview components
 */
export declare function SkeletonPropertyComponent({ property, size }: SkeletonPropertyComponentProps): any;
export declare function renderSkeletonImageThumbnail(size: PreviewSize): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonText(index?: number): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonCaptionText(index?: number): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonIcon(): import("@emotion/react/jsx-runtime").JSX.Element;
