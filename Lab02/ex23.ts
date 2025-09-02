interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchCompletedTodos(): Promise<Todo[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await response.json();

    const completedTodos = todos.filter((todo: Todo) => todo.completed);

    console.log("Completed Todos:", completedTodos);
    return completedTodos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}

fetchCompletedTodos();
