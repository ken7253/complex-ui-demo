import { type FC, PropsWithChildren } from "react";

import { Context } from "./context";
import type { FlowContext as FlowContextType } from "./types";
import styles from "./FlowContext.module.css";

type Props = PropsWithChildren<Partial<FlowContextType> & {}>;

export const FlowContext: FC<Props> = ({ direction = "row", children }) => {
  return (
    <Context value={{ direction }}>
      <div style={{ flexDirection: direction }} className={styles.outer}>
        {children}
      </div>
    </Context>
  );
};
