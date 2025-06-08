import { type FC, PropsWithChildren } from "react";

import { Context } from "./context";
import type { FlowContext as FlowContextType } from "./types";

type Props = PropsWithChildren<Partial<FlowContextType> & {}>;

export const FlowContext: FC<Props> = ({ direction = "row", children }) => {
  return <Context value={{ direction }}>{children}</Context>;
};
