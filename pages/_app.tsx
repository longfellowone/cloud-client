import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: any, query) => {
            if (query.state.data !== undefined) {
              console.log(error.message)
              // Toast here
            }
          },
        }),
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default MyApp
