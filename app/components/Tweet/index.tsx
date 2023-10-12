import { FC } from "react";
import { Card } from "@package/card";
import { Avatar } from "@package/avatar";
import { formatDistance } from "date-fns";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@package/button";

export interface TweetProp {
  description: string;
  name?: string;
  username?: string;
  createdDate?: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
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
  likeCount,
  viewCount,
  commentCount,
}) => {
  return (
    <Card className="border-b border-color">
      <Card.Body>
        <div className="flex gap-6">
          <Avatar alt="" src="/avatar/emily.jpeg" />
          <div className="shrink">
            <div className="flex items-center gap-1">
              <p className="text-sm font-bold">{name}</p>
              <small className="text-slate-500 dark:text-slate-300 ">{`@${username} . `}</small>
              {createdDate ? (
                <small className="text-slate-500 dark:text-slate-400">
                  {getTimeAgo(createdDate)}
                </small>
              ) : null}
            </div>
            <p className="text-slate-800 dark:text-white">{description}</p>
            <div className="flex gap-4 pt-3">
              <Button ariaLabel="like" className="group hover:text-red-500">
                <>
                  <span className="p-2 rounded-full group-hover:bg-red-100">
                    <Heart width={16} height={16} />
                  </span>
                  <span className="text-sm">{likeCount}</span>
                </>
              </Button>
              <Button ariaLabel="comment" className="group">
                <>
                  <span className="icon-bg p-2 rounded-full group-hover:bg-sky-100">
                    <MessageCircle width={16} height={16} />
                  </span>
                  <span className="text-sm">{commentCount}</span>
                </>
              </Button>
              <Button ariaLabel="view" className="group">
                <>
                  <span className="p-2 rounded-full group-hover:bg-sky-100">
                    <MessageCircle width={16} height={16} />
                  </span>
                  <span className="text-sm">{viewCount}</span>
                </>
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
