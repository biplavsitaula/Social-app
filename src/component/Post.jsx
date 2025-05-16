import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: "25rem" }}>
     
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
        onClick={() => deletePost(post.id)}
      >
        <TiDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title} </h5>

        <p>
          {post.tags.map((tag,index) => (
            <span key={tag} className="badge text-bg-dark post-tag">
              {tag}
            </span>
          ))}
        </p>
        <p className="card-text">{post.body}</p>

        <p>
          <button type="button" className="post-like">
            Like{" "}
            <span className="badge text-bg-primary">
              {post.reactions.likes}
            </span>
          </button>
        </p>
      </div>
    </div>
  );
};
export default Post;
