import { useReducer } from "react";
import { createContext } from "react";

export const PostListData = createContext({
  postList: [],
  addAllPost: () => {},
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

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
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
    <PostListData.Provider
      value={{ postList, addAllPost, addPost, deletePost }}
    >
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
