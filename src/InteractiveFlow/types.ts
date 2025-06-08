import type { MouseEvent } from "react";

export type FlowContext = {
  direction: "row" | "column";
};

export type InsertEventHandler<E extends Element = HTMLButtonElement> = (
  type: "prev" | "next",
  event: MouseEvent<E>,
) => void;
