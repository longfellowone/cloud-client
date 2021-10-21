import useSWR from 'swr'

const API = process.env.NEXT_PUBLIC_API
export const TASKS_KEY = API + 'v1/postgres'

export interface Task {
  id: number
  name: string
}

export function useTasks() {
  const { data, error } = useSWR<Task[]>(TASKS_KEY)

  return {
    tasks: data,
    isLoading: !error && !data,
    isError: error,
  }
}
