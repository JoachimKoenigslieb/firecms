import { EntityCollection, Property, ResolvedProperty } from "../../../../types";
export declare function getCellAlignment(property: Property | ResolvedProperty): "right" | "left" | "center";
export declare function isPropertyFilterable(property: ResolvedProperty): boolean;
export declare function getPropertyColumnWidth(property: ResolvedProperty): number;
export declare function getSubcollectionColumnId(collection: EntityCollection): string;
