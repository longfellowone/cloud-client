import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { getTasks, TASKS_KEY } from '../hooks/useTasks'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(TASKS_KEY, getTasks)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
