import { useTasks } from '../hooks/useTasks'

const TaskList = () => {
  const tasks = useTasks()

  if (tasks.isLoadingError) return <div>error</div>

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

export default TaskList
