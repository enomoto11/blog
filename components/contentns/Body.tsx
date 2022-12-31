import { memo } from "react";
import { CommonCard } from "../common/Card";

export const ContentsBody = memo(() => {
  return (
    <>
      <CommonCard
        ImageSrc="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        title="Norway Fjord Adventures"
        bodies={[
          "With Fjord Tours you can explore more of the magical fjord landscapes",
          "with tours and activities on and around the fjords of Norway",
        ]}
      />
      <CommonCard
        ImageSrc="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        title="Norway Fjord Adventures"
        bodies={[
          "With Fjord Tours you can explore more of the magical fjord landscapes",
          "with tours and activities on and around the fjords of Norway",
        ]}
      />
      <CommonCard
        ImageSrc="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        title="Norway Fjord Adventures"
        bodies={[
          "With Fjord Tours you can explore more of the magical fjord landscapes",
          "with tours and activities on and around the fjords of Norway",
        ]}
      />
    </>
  );
});
