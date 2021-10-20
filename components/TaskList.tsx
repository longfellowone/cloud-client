import { useTasks } from '../hooks/useTasks'

export const TaskList = () => {
  const { tasks, isLoading, isError } = useTasks()

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div> // Could also use ternary operator

  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.id}>
          {task.id} - {task.name}
        </div>
      ))}
    </div>
  )
}
