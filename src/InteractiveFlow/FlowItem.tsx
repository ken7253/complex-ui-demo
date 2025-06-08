import type { FC, PropsWithChildren, JSX, ReactElement } from "react";
import { use } from "react";

import { Context } from "./context";
import type { InsertEventHandler } from "./types";
import styles from "./FlowItem.module.css";

type Props = PropsWithChildren<
  JSX.IntrinsicElements["div"] & {
    prevButton?: ReactElement;
    nextButton?: ReactElement;
    onInsert?: InsertEventHandler;
  }
>;

export const FlowItem: FC<Props> = ({ prevButton, nextButton, children, onInsert, ...rest }) => {
  const { direction } = use(Context);

  return (
    <div style={{ flexDirection: direction }} className={styles.outer} {...rest}>
      <button onClick={(event) => onInsert?.("prev", event)} className={styles.button}>
        {prevButton}
      </button>
      {children}
      <button onClick={(event) => onInsert?.("next", event)} className={styles.button}>
        {nextButton}
      </button>
    </div>
  );
};
