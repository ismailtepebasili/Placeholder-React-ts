import { Link, useLoaderData } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const userPostsLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );
  const posts = await response.json();
  return posts;
};

function UserPosts() {
  const posts = useLoaderData() as PostParams[];
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/users/${post.userId}/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPosts;
