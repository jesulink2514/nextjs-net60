import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div>
      <Link href={'/products'} >Products</Link>
    </div>
    <Component {...pageProps} />
  </>
}

export default MyApp
