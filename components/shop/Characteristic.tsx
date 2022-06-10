import { CharacteristicProps } from "@interfaces";
import React from "react";

export const Characteristic = ({ title, value }: CharacteristicProps) => {
  return (
    <li>
      <span className="me-3">{title}</span>
      <span className="text-dark">{value}</span>
    </li>
  );
};
