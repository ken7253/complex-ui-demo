import { createContext } from "react";

import type { FlowContext as FlowContextType } from "./types";

export const Context = createContext<FlowContextType>({
  direction: "row",
});
