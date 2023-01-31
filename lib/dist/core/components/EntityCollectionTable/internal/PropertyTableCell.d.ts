import React from "react";
import { CMSType, Entity, EntityCollection, ResolvedProperty } from "../../../../types";
import { CustomFieldValidator } from "../../../../form/validation";
export interface PropertyTableCellProps<T extends CMSType, M extends Record<string, any>> {
    propertyKey: string;
    columnIndex: number;
    align: "right" | "left" | "center";
    customFieldValidator?: CustomFieldValidator;
    value: T;
    readonly: boolean;
    collection: EntityCollection<M>;
    setFocused: (value: boolean) => void;
    property: ResolvedProperty<T>;
    height: number;
    width: number;
    entity: Entity<any>;
    path: string;
}
export declare const PropertyTableCell: React.FunctionComponent<PropertyTableCellProps<any, any>>;
