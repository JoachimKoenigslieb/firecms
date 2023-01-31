import React from "react";
export declare function NumberTableInput(props: {
    error: Error | undefined;
    value: number;
    align: "right" | "left" | "center";
    updateValue: (newValue: (number | null)) => void;
    focused: boolean;
    disabled: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
