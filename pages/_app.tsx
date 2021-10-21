import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from '../libs/fetch'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
