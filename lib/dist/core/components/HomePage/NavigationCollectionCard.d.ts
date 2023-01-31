import { TopNavigationEntry } from "../../../types";
/**
 * This is the component used in the home page to render a card for each
 * collection.
 * @category Components
 * @param view
 * @param path
 * @param collection
 * @param url
 * @param name
 * @param description
 * @param onClick
 * @constructor
 */
export declare function NavigationCollectionCard({ view, path, collection, url, name, description, onClick }: TopNavigationEntry & {
    onClick?: () => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
