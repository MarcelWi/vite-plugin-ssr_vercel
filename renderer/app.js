import { createSSRApp, h } from 'vue'
import App from './App.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const AppLayout = {
    render() {
      return h(
        AppLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(AppLayout)

  return app
}
