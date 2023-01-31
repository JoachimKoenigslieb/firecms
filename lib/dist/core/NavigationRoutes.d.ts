import React from "react";
/**
 * @category Components
 */
export type NavigationRoutesProps = {
    /**
     * In case you need to override the home page
     */
    HomePage?: React.ComponentType;
    customRoutes?: React.ReactNode[];
};
/**
 * This component is in charge of rendering
 * all the related routes (entity collection root views, custom views
 * or the home route) related to a {@link NavigationContext}.
 * This component needs a parent {@link FireCMS}
 *
 * @constructor
 * @category Components
 */
export declare const NavigationRoutes: React.NamedExoticComponent<NavigationRoutesProps>;
interface RouteWrapperProps {
    title: string;
    path: string;
    type: "collection" | "view" | "home";
}
/**
 * This component updates the breadcrumb in the app bar when rendered
 * @param children
 * @param title
 * @param path
 * @param type
 * @constructor
 * @category Components
 */
export declare const RouteWrapper: React.NamedExoticComponent<React.PropsWithChildren<RouteWrapperProps>>;
export {};
