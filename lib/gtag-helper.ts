export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    // eslint-disable-next-line camelcase
    page_path: url,
  })
}
