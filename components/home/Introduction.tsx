import { memo } from "react";
import { CommonBox } from "../common/Box";

export const Introduction = memo(() => {
  const message =
    "enoのブログになります \n 大阪大学基礎工学部在籍　\n エンジニアインターンとしてNext.js/TypeScript/Goを中心に勉強中";

  return <CommonBox children={message} />;
});
