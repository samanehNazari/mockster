import { FC } from "react";
import { Card } from "@package/card";
import { Avatar } from "@package/avatar";
import { formatDistance } from "date-fns";

export interface TweetProp {
  description: string;
  name?: string;
  username?: string;
  createdDate?: string;
}

const getTimeAgo = (createdDate: string) => {
  return formatDistance(new Date(createdDate), new Date(), {
    addSuffix: true,
  });
};

export const Tweet: FC<TweetProp> = ({
  description,
  name,
  username,
  createdDate,
}) => {
  return (
    <Card className="border-b border-color">
      <Card.Body>
        <div className="flex gap-6">
          <Avatar alt="" src="/avatar/emily.jpeg" />
          <div className="shrink">
            <div className="flex items-center gap-1">
              <p className="text-sm font-bold">{name}</p>
              <small className="text-slate-500">{`@${username} . `}</small>
              {createdDate ? (
                <small className="text-slate-500">
                  {getTimeAgo(createdDate)}
                </small>
              ) : null}
            </div>
            <p className="text-slate-800 text-base">{description}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
