import React, { ErrorInfo, PropsWithChildren } from "react";
export declare class ErrorBoundary extends React.Component<PropsWithChildren<Record<string, unknown>>, {
    error: Error | null;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | React.ReactFragment | import("@emotion/react/jsx-runtime").JSX.Element | null | undefined;
}
