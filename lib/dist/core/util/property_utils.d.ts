import React from "react";
import { FieldConfig, PropertiesOrBuilders, PropertyOrBuilder, ResolvedProperty } from "../../types";
export declare function isReferenceProperty(propertyOrBuilder: PropertyOrBuilder, fields?: Record<string, FieldConfig>): boolean | null;
export declare function getIdIcon(color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error", fontSize?: "inherit" | "medium" | "large" | "small" | undefined): React.ReactNode;
export declare function getIconForProperty(property: PropertyOrBuilder | ResolvedProperty, color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error", fontSize?: "inherit" | "medium" | "large" | "small" | undefined): React.ReactNode;
export declare function getBadgeForWidget(widget: FieldConfig | undefined, color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error"): React.ReactNode;
export declare function getColorForProperty(property: PropertyOrBuilder): string;
/**
 * Get a property in a property tree from a path like
 * `address.street`
 * @param properties
 * @param path
 */
export declare function getPropertyInPath<M extends Record<string, any>>(properties: PropertiesOrBuilders<M>, path: string): PropertyOrBuilder<any, M> | undefined;
export declare function getResolvedPropertyInPath(properties: Record<string, ResolvedProperty>, path: string): ResolvedProperty | undefined;
