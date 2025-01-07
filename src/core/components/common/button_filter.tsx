import React from "react";

import { ArrowUpDown } from "lucide-react";

import { Button } from "../ui/button";
import { ButtonProps } from "@/core/models/definitions";

const ButtonFilter: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <Button variant="ghost" onClick={onClick}>
      <div className="text-center">{title}</div>
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default ButtonFilter;
