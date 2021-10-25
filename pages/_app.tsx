import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

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
