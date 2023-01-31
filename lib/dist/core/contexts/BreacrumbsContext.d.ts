import React from "react";
import { BreadcrumbsController } from "../../hooks/useBreadcrumbsContext";
export declare const BreadcrumbContext: React.Context<BreadcrumbsController>;
interface BreadcrumbsProviderProps {
    children: React.ReactNode;
}
export declare const BreadcrumbsProvider: React.FC<BreadcrumbsProviderProps>;
export {};
