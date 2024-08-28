import { Dispatch, SetStateAction } from "react";

export interface IGridAttributes {
  setIsCross: Dispatch<SetStateAction<boolean>>;
  setIsRound: Dispatch<SetStateAction<boolean>>;
  isRound: boolean;
  isCross: boolean;
}