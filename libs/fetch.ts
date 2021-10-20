// https://github.com/vercel/swr/blob/master/examples/basic-typescript/libs/fetch.ts
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
