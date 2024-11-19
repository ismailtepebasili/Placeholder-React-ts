import { createBrowserRouter } from "react-router-dom";
import { HomePage, RootLayout, UserDetailPage, UsersPage } from "./pages";
import { usersLoader } from "./pages/UsersPage";
import { userLoader } from "./pages/UserDetailPage";
import { UserAlbums, UserPosts, UserTodos } from "./pages/userinfo";
import { userPostsLoader } from "./pages/userinfo/UserPosts";
import { userAlbumsLoader } from "./pages/userinfo/UserAlbums";
import { userTodosLoader } from "./pages/userinfo/UserTodos";
import AlbumDetails, { albumLoader } from "./pages/AlbumDetails";
import PostDetails, { postLoader } from "./pages/PostDetails";
import FavoritePage from "./pages/FavoritePage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",

        children: [
          {
            index: true,
            element: <UserDetailPage />,
            loader: userLoader,
          },
          {
            path: "posts",
            element: <UserPosts />,
            loader: userPostsLoader,
          },
          {
            path: "albums",
            element: <UserAlbums />,
            loader: userAlbumsLoader,
          },
          {
            path: "todos",
            element: <UserTodos />,
            loader: userTodosLoader,
          },
        ],
      },
      {
        path: "users/:userId/albums/:albumId",
        element: <AlbumDetails />,
        loader: albumLoader,
      },
      {
        path: "users/:userId/posts/:postId",
        element: <PostDetails />,
        loader: postLoader,
      },
      {
        path: "favorites",
        element: <FavoritePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
