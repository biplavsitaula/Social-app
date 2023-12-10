import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addAllPost } = useContext(PostListData);

  const handleGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addAllPost(data.posts));
  };

  return (
    <>
      {postList.length === 0 && <Welcome onGetPostClick={handleGetPost} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
