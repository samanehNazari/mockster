import { ReactElement, FC } from "react";
import { Card } from "../Card";
import { Avatar } from "@package/avatar";

export interface TweetProp {
  body: ReactElement;
}

export const Tweet: FC<TweetProp> = ({ body }) => {
  return (
    <Card>
      <Card.Body>
        <div className="flex gap-6 p-4">
          <Avatar alt="" src="/avatar/emily.jpeg" />
          <p className="shrink">{body}</p>
        </div>
      </Card.Body>
    </Card>
  );
};
