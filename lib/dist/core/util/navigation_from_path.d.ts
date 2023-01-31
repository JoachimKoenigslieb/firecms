import { EntityCollection, EntityCustomView } from "../../types";
export type NavigationViewInternal<M extends Record<string, any> = any> = NavigationViewEntityInternal<M> | NavigationViewCollectionInternal<M> | NavigationViewEntityCustomInternal<M>;
interface NavigationViewEntityInternal<M extends Record<string, any>> {
    type: "entity";
    entityId: string;
    path: string;
    parentCollection: EntityCollection<M>;
}
interface NavigationViewCollectionInternal<M extends Record<string, any>> {
    type: "collection";
    path: string;
    collection: EntityCollection<M>;
}
interface NavigationViewEntityCustomInternal<M extends Record<string, any>> {
    type: "custom_view";
    path: string;
    view: EntityCustomView<M>;
}
export declare function getNavigationEntriesFromPathInternal(props: {
    path: string;
    collections: EntityCollection[] | undefined;
    customViews?: EntityCustomView<any>[];
    currentFullPath?: string;
}): NavigationViewInternal[];
export {};
