import React from "react";
import AddPost from "./AddPost";
import PostList from "./PostList";

function Post() {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="text-base font-bold">Post</h1>
          <AddPost />
        </div>
        <PostList />
      </div>
    </>
  );
}

export default Post;
