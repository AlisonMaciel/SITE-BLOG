import { LayoutDefault } from "@/components/_Layout-Default";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Inter, PT_Sans_Caption} from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500']
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  style: 'normal',
  weight: ['700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault className={`${inter.className} ${ptSansCaption.className}`}>
      <Component {...pageProps} />
    </LayoutDefault>
  );
}
