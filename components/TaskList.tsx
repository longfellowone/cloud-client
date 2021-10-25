import { useTasks } from '../hooks/useTasks'

export const TaskList = () => {
  const { data, error } = useTasks()

  if (error) return <div>failed to load</div>

  return (
    <div>
      {data?.map((task) => (
        <div key={task.id}>
          {task.id} - {task.name}
        </div>
      ))}
    </div>
  )
}
