import { memo } from "react";
import { CommonBox } from "../common/Box";

export const Introduction = memo(() => {
  return <CommonBox children="主に技術記事について投稿しています" />;
});
