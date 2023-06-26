import React, { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function TaskList() {
  const [results, setResults] = useState<Task[]>([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks")
      .then((response) => response.json())
      .then((data: Task[]) => setResults(data));
  }, []);

  return (
    <>
      <ul>
        {results.map((result) => (
          <TaskItem
            key={result.id}
            task={result.title}
            completed={result.completed}
          />
        ))}
      </ul>
    </>
  );
}
