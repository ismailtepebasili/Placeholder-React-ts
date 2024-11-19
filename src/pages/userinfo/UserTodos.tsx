import { useLoaderData } from "react-router-dom";

interface TodosProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const userTodosLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/todos`
  );
  const todos = await response.json();
  return todos;
};

function UserTodos() {
  const todos = useLoaderData() as TodosProps[];
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserTodos;
