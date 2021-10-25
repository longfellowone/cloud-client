import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'
import { TaskList } from '../components/TaskList'
import { getTasks, TASKS_KEY } from '../hooks/useTasks'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <main>
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

// const queryString = new URLSearchParams(new FormData(myForm)).toString()

// const formData = new FormData(searchForm);
// const searchParams = new URLSearchParams(formData);

// <form id="my-form">
//   <input type="text" name="name" id="name">
//    <select id="gender" name="gender">
//     <option value="foo">Foo</option>
//     <option value="bar">Bar</option>
//     <option value="baz">Baz</option>
//    </select>
//   <input type="submit" />
// </form>
