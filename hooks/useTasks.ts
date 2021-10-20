import useSWR from 'swr'
import { fetcher } from '../libs/fetch'

const API = 'http://192.168.0.91:8080/'
export const TASKS_KEY = API + 'v1/postgres'

export interface Task {
  id: number
  name: string
}

export function useTasks() {
  const { data, error } = useSWR<Task[]>(TASKS_KEY, fetcher)

  return {
    tasks: data,
    isLoading: !error && !data,
    isError: error,
  }
}
