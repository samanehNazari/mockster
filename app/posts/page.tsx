"use client";
import { useFetch } from "@package/hooks";
import { Tweet } from "../components/Tweet";
import { PostResponse } from "@package/mock-data";

const baseUrl = "http://localhost:3000/api/posts";

export default function Posts() {
  const { data, error } = useFetch<PostResponse[]>(baseUrl);

  if (error)
    return (
      <div className="h-full">
        <div className="flex flex-col items-center w-full h-[80vh]">
          <p className="my-4"></p>
          <p>There is an error.</p>
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="h-full">
        <div className="flex flex-col items-center w-full h-[80vh]">
          <p className="my-4">Loading...</p>
        </div>
      </div>
    );

  return (
    <section className="h-full border-x pt-6 pb-12 border-color">
      {data.map((post) => (
        <Tweet
          key={post.id}
          name={post.user.name}
          username={post.user.username}
          createdDate={post.createdAt}
          description={post.body}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
          viewCount={post.viewCount}
        />
      ))}
    </section>
  );
}
