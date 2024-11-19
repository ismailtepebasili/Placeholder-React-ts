import { useLoaderData } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentsParams {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const postLoader = async ({ params }: any) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postResponse.json();

  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = await commentResponse.json();
  return { post, comments };
};

function PostDetails() {
  const { post, comments } = useLoaderData() as {
    post: PostParams;
    comments: CommentsParams[];
  };
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h3>Comments</h3>
        <ul>
          {comments.map((Comment) => (
            <li key={Comment.id}>{Comment.body}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PostDetails;
