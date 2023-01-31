import { Entity, EntityCollection, ExportConfig, SelectionController } from "../../../types";
export type EntityCollectionViewActionsProps<M extends Record<string, any>> = {
    collection: EntityCollection<M>;
    path: string;
    selectionEnabled: boolean;
    exportable: boolean | ExportConfig;
    onNewClick: () => void;
    onMultipleDeleteClick: () => void;
    selectionController: SelectionController<M>;
    loadedEntities: Entity<M>[];
};
export declare function EntityCollectionViewActions<M extends Record<string, any>>({ collection, onNewClick, exportable, onMultipleDeleteClick, selectionEnabled, path, selectionController, loadedEntities }: EntityCollectionViewActionsProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
