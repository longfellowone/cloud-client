import type { NextPage } from 'next'
import Head from 'next/head'

// const response = await fetch('https://example.com/login', {
//   method: 'POST',
//   body: new URLSearchParams({
//     param: 'Some value',
//     anotherParam: 'Another value',
//   }),
// })

// const queryString = new URLSearchParams(new FormData(myForm)).toString()

// const formData = new FormData(searchForm);
// const searchParams = new URLSearchParams(formData);

{
  /* <form id="my-form">
  <input type="text" name="name" id="name">
  <select id="gender" name="gender">
    <option value="foo">Foo</option>
    <option value="bar">Bar</option>
    <option value="baz">Baz</option>
  </select>
  <input type="submit" />
</form>  */
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>Hello World!</main>
    </div>
  )
}

export default Home
