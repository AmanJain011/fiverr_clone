import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <div className='w-full mx-auto mb-auto'>
      <Component {...pageProps} />
    </div>
  )
}
