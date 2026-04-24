import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata = {
  title: {
    default: 'QuizMD Docs',
    template: '%s | QuizMD Docs'
  },
  description: 'Official documentation for QuizMD.'
}

const navbar = (
  <Navbar
    logo={<b>QuizMD Docs</b>}
    projectLink="https://github.com/steliosot/quizmd"
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © QuizMD.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/steliosot/quizmd-docs/blob/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
