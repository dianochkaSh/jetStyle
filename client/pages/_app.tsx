import type { AppProps } from 'next/app'
/*styles*/
import "../global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}