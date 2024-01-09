import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => {
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data);
    },
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, todo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });

  return addTodo;
};

export default useAddTodo;
