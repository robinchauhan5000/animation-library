import { CSSProperties, FC, PropsWithChildren, useRef } from "react";
import useElementOnScreen from "../hooks/useElementInView";

const BaseAnimatedComponent: FC<
  PropsWithChildren<{ from: CSSProperties; to: CSSProperties }>
> = ({ from, to, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({
    ref: ref,
    rootMargin: "0px",
  });
  const defaultStyles: CSSProperties = {
    transition: "1s ease-in-out",
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }>
      {children}
    </div>
  );
};

export default BaseAnimatedComponent;
