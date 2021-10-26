import { useTasks } from '../hooks/useTasks'

export const TaskList = () => {
  const tasks = useTasks()

  if (tasks.data) {
    return (
      <div>
        {tasks.data?.map((task) => (
          <div key={task.id}>
            {task.id} - {task.name}
          </div>
        ))}
      </div>
    )
  }

  if (tasks.error instanceof Error)
    return <div>error: {tasks.error.message}</div>
}
