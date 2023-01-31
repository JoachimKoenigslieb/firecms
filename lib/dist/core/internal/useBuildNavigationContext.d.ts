import { AuthController, CMSView, CMSViewsBuilder, CollectionOverrideHandler, DataSource, EntityCollection, EntityCollectionsBuilder, FireCMSPlugin, NavigationContext, User, UserConfigurationPersistence } from "../../types";
type BuildNavigationContextProps<UserType extends User> = {
    basePath: string;
    baseCollectionPath: string;
    authController: AuthController<UserType>;
    collections?: EntityCollection[] | EntityCollectionsBuilder;
    views?: CMSView[] | CMSViewsBuilder;
    collectionOverrideHandler: CollectionOverrideHandler | undefined;
    userConfigPersistence?: UserConfigurationPersistence;
    plugins?: FireCMSPlugin[];
    dataSource: DataSource;
};
export declare function useBuildNavigationContext<UserType extends User>({ basePath, baseCollectionPath, authController, collections: baseCollections, views: baseViews, collectionOverrideHandler, userConfigPersistence, plugins, dataSource }: BuildNavigationContextProps<UserType>): NavigationContext;
export declare function getSidePanelKey(path: string, entityId?: string): string;
export {};
