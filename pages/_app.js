import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>csolution.dev</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Card</a>
          </Link>
        </div>

          <img
            id="title"
            src="https://images.vexels.com/media/users/3/130718/isolated/lists/9368407454443561ac004d20786d4b43-grid-on-globe-icon.png"
            alt="csolution.dev"
          ></img>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
