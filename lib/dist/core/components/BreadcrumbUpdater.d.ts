import { PropsWithChildren } from "react";
export interface BreadcrumbUpdaterProps {
    title: string;
    path: string;
}
/**
 * This component updates the breadcrumb in the app bar when rendered
 * @param children
 * @param title
 * @param path
 * @constructor
 * @category Components
 */
export declare function BreadcrumbUpdater({ children, title, path }: PropsWithChildren<BreadcrumbUpdaterProps>): import("@emotion/react/jsx-runtime").JSX.Element;
