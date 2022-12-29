import { Box } from "@mantine/core";
import { memo } from "react";

interface Props {
  children: string;
}

export const CommonBox = memo((props: Props) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.xl,
        margin: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",
        color: "black",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      {props.children}
    </Box>
  );
});
