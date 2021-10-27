import ky from 'ky'
import { useForm, SubmitHandler } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

type FormValues = {
  name: string
}

const TaskForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (form) => {
    console.log(form)

    const newTask = { id: uuidv4(), ...form }
    const body = new URLSearchParams(newTask)

    ky.post(process.env.NEXT_PUBLIC_API + 'v1/postgres', { body })
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="">
          name:
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="bg-gray-300 ml-2 p-2 outline"
        />
        <input type="submit" className="ml-2 p-2 bg-gray-300" />
      </form>
    </div>
  )
}

export default TaskForm
