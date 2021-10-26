import ky from 'ky'
import { useQuery } from 'react-query'

export const TASKS_KEY = 'v1/postgres'

// type State = 'all' | 'open' | 'done'
type Task = {
  id: number
  name: string
}

type Tasks = ReadonlyArray<Task>

export const getTasks = async (): Promise<Tasks> => {
  return await ky.get(process.env.NEXT_PUBLIC_API + TASKS_KEY).json()
}

export const useTasks = () => {
  return useQuery(TASKS_KEY, getTasks)
}
