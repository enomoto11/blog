import { Button, MantineSize } from "@mantine/core";
import { memo } from "react";

interface Props {
  title: string;
  onClick: () => void;
  size?: MantineSize;
  danger?: boolean;
}

export const CommonButton = memo((props: Props) => {
  return props.danger ? (
    <Button onClick={props.onClick} size={props.size} color="red">
      {props.title}
    </Button>
  ) : (
    <Button onClick={props.onClick} size={props.size}>
      {props.title}
    </Button>
  );
});
