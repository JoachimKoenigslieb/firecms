export declare const COLLECTION_PATH_SEPARATOR = "::";
/**
 * Remove the entity ids from a given path
 * `products/B44RG6APH/locales` => `products::locales`
 * @param path
 */
export declare function stripCollectionPath(path: string): string;
export declare function segmentsToStrippedPath(paths: string[]): string;
/**
 * Extract the collection path routes
 * `products/B44RG6APH/locales` => [`products`, `locales`]
 * @param path
 */
export declare function fullPathToCollectionSegments(path: string): string[];
