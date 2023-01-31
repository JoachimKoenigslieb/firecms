import { CollectionSize, Entity } from "../../../../types";
/**
 *
 * @param entity
 * @param width
 * @param frozen
 * @param isSelected
 * @param selectionEnabled
 * @param size
 * @param toggleEntitySelection
 * @param onCopyClicked
 * @param onEditClicked
 * @param onDeleteClicked
 * @constructor
 *
 * @category Collection components
 */
export declare function EntityCollectionRowActions<M extends Record<string, any>>({ entity, width, frozen, isSelected, selectionEnabled, size, toggleEntitySelection, onCopyClicked, onEditClicked, onDeleteClicked }: {
    entity: Entity<M>;
    width: number;
    frozen?: boolean;
    size: CollectionSize;
    isSelected?: boolean;
    selectionEnabled?: boolean;
    toggleEntitySelection?: (selectedEntity: Entity<M>) => void;
    onEditClicked?: (selectedEntity: Entity<M>) => void;
    onCopyClicked?: (selectedEntity: Entity<M>) => void;
    onDeleteClicked?: (selectedEntity: Entity<M>) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
