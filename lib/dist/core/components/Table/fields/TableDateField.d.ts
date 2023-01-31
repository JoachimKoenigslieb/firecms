import React from "react";
export declare function TableDateField(props: {
    name: string;
    error: Error | undefined;
    mode?: "date" | "date_time";
    internalValue: Date | undefined | null;
    updateValue: (newValue: (Date | null)) => void;
    focused: boolean;
    disabled: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
