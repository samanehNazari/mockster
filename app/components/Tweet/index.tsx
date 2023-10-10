import { ReactElement, FC } from "react";
import { Card } from "@/packages/components/card";
import { Avatar } from "@/packages/components/avatar";

export interface TweetProp {
  body: ReactElement;
}

export const Tweet: FC<TweetProp> = ({ body }) => {
  return (
    <Card className="border-b border-color">
      <Card.Body>
        <div className="flex gap-6">
          <Avatar alt="" src="/avatar/emily.jpeg" />
          <p className="shrink">{body}</p>
        </div>
      </Card.Body>
    </Card>
  );
};
