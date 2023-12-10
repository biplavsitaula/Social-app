import { useContext } from "react";
import { useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label"></label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="username"
          id="userId"
          aria-describedby="emailHelp"
        />
        <label htmlFor="title" className="form-label"></label>
        <input
          type="text"
          ref={titleElement}
          placeholder="Title"
          className="form-control post-title"
          id="title"
          aria-describedby="emailHelp"
        />
        <label htmlFor="body" className="form-label"></label>
        <textarea
          type="text"
          ref={bodyElement}
          rows="5"
          placeholder="Post of the the day."
          className="form-control post-body"
          id="body"
          aria-describedby="emailHelp"
        />
        <label htmlFor="reactions" className="form-label"></label>
        <input
          type="number"
          ref={reactionsElement}
          placeholder="Reactions"
          className="form-control input-post"
          id="reactions"
          aria-describedby="emailHelp"
        />
        <label htmlFor="tags" className="form-label"></label>
        <input
          type="text"
          ref={tagsElement}
          placeholder="Enter tags with space"
          className="form-control input-post"
          id="tags"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
