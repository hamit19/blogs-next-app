import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const BudgetCopied = ({ copied }) => {
  return (
    <span
      className={`absolute top-0 flex items-center gap-1 z-10  ${
        copied
          ? ` visible -left-20 opacity-100`
          : ` -left-10 invisible opacity-0 `
      }  bg-white text-green-500 px-2 py-1 text-xs custom-transition rounded-md`}
    >
      <AiFillCheckCircle />
      copied!
    </span>
  );
};

export default BudgetCopied;
