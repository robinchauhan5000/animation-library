import { FC, PropsWithChildren } from "react";
import BaseAnimatedComponent from "./BaseAnimatedComponent";

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <BaseAnimatedComponent from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </BaseAnimatedComponent>
);

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <BaseAnimatedComponent
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}>
    {children}
  </BaseAnimatedComponent>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <BaseAnimatedComponent from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </BaseAnimatedComponent>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
};
