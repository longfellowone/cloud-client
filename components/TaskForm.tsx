import ky from 'ky'
import { SyntheticEvent } from 'react'

const TaskForm = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const test = { id: '1', name: 'test post' }

    const body = new URLSearchParams(test)

    ky.post(process.env.NEXT_PUBLIC_API + 'v1/postgres', { body })
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-300 p-2 outline"
        />
        <input type="submit" className="ml-2 p-2 bg-gray-300" />
      </form>
    </div>
  )
}

export default TaskForm
