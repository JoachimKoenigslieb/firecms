import { Entity, EntityCallbacks, EntityCollection } from "../../../../types";
export interface DeleteEntityDialogProps<M extends Record<string, any>> {
    entityOrEntitiesToDelete?: Entity<M> | Entity<M>[];
    path: string;
    collection: EntityCollection<M>;
    open: boolean;
    onClose: () => void;
    callbacks?: EntityCallbacks<M>;
    onEntityDelete?(path: string, entity: Entity<M>): void;
    onMultipleEntitiesDelete?(path: string, entities: Entity<M>[]): void;
}
export declare function DeleteEntityDialog<M extends Record<string, any>>({ entityOrEntitiesToDelete, collection, onClose, open, callbacks, onEntityDelete, onMultipleEntitiesDelete, path, ...other }: DeleteEntityDialogProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
