import type { MouseEvent } from "react";

export type FlowContext = {
  direction: "row" | "column";
};

export type InsertEventHandler<E extends Element = HTMLButtonElement> = (index: number, event: MouseEvent<E>) => void;
