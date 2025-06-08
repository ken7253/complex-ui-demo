import type { FC, PropsWithChildren, CSSProperties, JSX } from "react";
import { use } from "react";

import { Context } from "./context";
import styles from "./DefaultButton.module.css";

type Props = PropsWithChildren<JSX.IntrinsicElements["div"] & {}>;

export const DefaultButton: FC<Props> = ({ children, ...rest }) => {
  const { direction } = use(Context);

  const computedStyles: CSSProperties = {
    [direction === "column" ? "width" : "height"]: "100%",
  };

  return (
    <div className={styles.button} style={computedStyles} {...rest}>
      {children}
    </div>
  );
};
