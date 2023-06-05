import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className='w-full mx-auto mb-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
