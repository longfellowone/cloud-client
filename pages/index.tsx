import type { NextPage } from 'next'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { TaskList } from '../components/TaskList'
import { TASKS_KEY } from '../hooks/useTasks'
import { fetcher } from '../libs/fetch'

const Home: NextPage = ({ fallback }: any) => {
  return (
    <>
      <Head>
        <title>localhost</title>
      </Head>
      <main>
        <SWRConfig value={{ fallback }}>
          <TaskList />
        </SWRConfig>
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const tasks = await fetcher(TASKS_KEY)

  return {
    props: {
      fallback: {
        [TASKS_KEY]: tasks,
      },
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
