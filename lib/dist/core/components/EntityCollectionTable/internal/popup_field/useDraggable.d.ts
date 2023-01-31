import React from "react";
interface DraggableProps {
    containerRef: React.RefObject<HTMLDivElement>;
    x?: number;
    y?: number;
    onMove: (x: number, y: number) => void;
}
export declare function useDraggable({ containerRef, x, y, onMove }: DraggableProps): void;
export {};
