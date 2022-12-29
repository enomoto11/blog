import { memo } from "react";
import { CommonButton } from "../common/Button";
import styled from "styled-components";

export const GoContents = memo(() => {
  return (
    <Wrapper>
      <CommonButton
        title={"ブログ"}
        onClick={() => {}}
        size={`lg`}
        danger={true}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div``;
