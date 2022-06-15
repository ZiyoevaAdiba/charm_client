import React, { FC, ReactNode } from "react";

export const HoverWrapper: FC<{ image: ReactNode; link: ReactNode }> = ({
  image,
  link,
}) => {
  return (
    <div className="hovereffect">
      {image}
      <div className="overlay">{link}</div>
    </div>
  );
};
