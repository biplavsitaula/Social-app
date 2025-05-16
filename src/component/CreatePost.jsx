import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label"></label>
        <input
          type="text"
          name="userId"
          className="form-control"
          placeholder="username"
          id="userId"
          aria-describedby="emailHelp"
        />
        <label htmlFor="title" className="form-label"></label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control post-title"
          id="title"
          aria-describedby="emailHelp"
        />
        <label htmlFor="body" className="form-label"></label>
        <textarea
          type="text"
          name="body"
          rows="5"
          placeholder="Post of the the day."
          className="form-control post-body"
          id="body"
          aria-describedby="emailHelp"
        />
        <label htmlFor="reactions" className="form-label"></label>
        <input
          type="number"
          name="reactions"
          placeholder="Reactions"
          className="form-control input-post"
          id="reactions"
          aria-describedby="emailHelp"
        />
        <label htmlFor="tags" className="form-label"></label>
        <input
          type="text"
          name="tags"
          placeholder="Enter tags with space"
          className="form-control input-post"
          id="tags"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
