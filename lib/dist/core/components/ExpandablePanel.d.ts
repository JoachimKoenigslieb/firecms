import { PropsWithChildren } from "react";
export declare function ExpandablePanel({ title, children, expanded, padding, darken }: PropsWithChildren<{
    title: React.ReactNode;
    expanded?: boolean;
    padding?: number | string;
    darken?: boolean;
}>): import("@emotion/react/jsx-runtime").JSX.Element;
