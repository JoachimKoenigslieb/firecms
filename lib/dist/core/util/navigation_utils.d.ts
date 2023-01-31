import { EntityCollection } from "../../types";
export declare function removeInitialAndTrailingSlashes(s: string): string;
export declare function removeInitialSlash(s: string): string;
export declare function removeTrailingSlash(s: string): string;
export declare function addInitialSlash(s: string): string;
export declare function getLastSegment(path: string): string;
export declare function resolveCollectionPathAliases(path: string, allCollections: EntityCollection[]): string;
/**
 * Find the corresponding view at any depth for a given path.
 * Note that path or segments of the paths can be collection aliases.
 * @param pathOrAlias
 * @param collections
 */
export declare function getCollectionByPathOrAlias<M extends Record<string, any>>(pathOrAlias: string, collections: EntityCollection[]): EntityCollection | undefined;
/**
 * Get the subcollection combinations from a path:
 * "sites/es/locales" => ["sites/es/locales", "sites"]
 * @param subpaths
 */
export declare function getCollectionPathsCombinations(subpaths: string[]): string[];
