import type { FC, PropsWithChildren, JSX, ReactElement } from "react";
import { use } from "react";

import { Context } from "./context";
import styles from "./FlowItem.module.css";

type Props = PropsWithChildren<
  JSX.IntrinsicElements["div"] & {
    prevButton?: ReactElement;
    nextButton?: ReactElement;
  }
>;

export const FlowItem: FC<Props> = ({ prevButton, nextButton, children, ...rest }) => {
  const { direction } = use(Context);

  return (
    <div style={{ flexDirection: direction }} className={styles.outer} {...rest}>
      <div>{prevButton}</div>
      {children}
      <div>{nextButton}</div>
    </div>
  );
};
