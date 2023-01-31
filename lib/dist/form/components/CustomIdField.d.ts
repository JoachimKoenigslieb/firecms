import { Entity, EntityStatus, EnumValues } from "../../types";
export declare function CustomIdField<M extends Record<string, any>, UserType>({ customId, entityId, status, onChange, error, entity }: {
    customId?: boolean | EnumValues | "optional";
    entityId?: string;
    status: EntityStatus;
    onChange: (id?: string) => void;
    error: boolean;
    entity: Entity<M> | undefined;
}): import("@emotion/react/jsx-runtime").JSX.Element;
