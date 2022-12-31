import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { memo } from "react";
import styled from "styled-components";

interface Props {
  ImageSrc?: string;
  title: string;
  badge?: string;
  bodies: string[]; // NOTE: 改行を挟む数だけ要素数を持つ配列
  Button?: React.ReactElement;
}

export const CommonCard = memo((props: Props) => {
  return (
    <Wrapper>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        {props.ImageSrc && (
          <Card.Section>
            <Image
              // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              src={props.ImageSrc}
              height={160}
              alt="Norway"
            />
          </Card.Section>
        )}

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.title}</Text>
          {props.badge && (
            <Badge color="pink" variant="light">
              {props.badge}
            </Badge>
          )}
        </Group>

        <Text size="sm" color="dimmed">
          {props.bodies?.map((body) => {
            return <>{body}</>;
          })}
          {/* With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway */}
        </Text>

        {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
        {props.Button}
      </Card>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 400px;
  margin: 20px;
`;
