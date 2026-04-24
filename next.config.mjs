import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true
})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.PAGES_BASE_PATH,
  trailingSlash: true
})
