import { useReducer } from "react";
import { createContext } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (crrPostList, action) => {
  let newPostList = crrPostList;
  if (action.type === "DELETE_POST") {
    newPostList = crrPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_ALL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...crrPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addAllPost = (posts) => {
    dispatchPostList({
      type: "ADD_ALL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
