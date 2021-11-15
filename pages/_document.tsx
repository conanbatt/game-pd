import Document, { Html, Head, Main, NextScript } from 'next/document'

const FONTS = ['Estonia', 'Allura', 'Italianno']

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {FONTS.map(font => (
            <link
              key={font}
              href={`https://fonts.googleapis.com/css2?family=${font}&display=optional`}
              rel="stylesheet"
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument