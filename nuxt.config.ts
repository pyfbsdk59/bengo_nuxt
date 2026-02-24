export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false, // 這裡我們不需要預設的身份驗證跳轉
  },
  app: {
    head: {
      title: 'Bengo 籌碼分析網',
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' }
      ]
    }
  }
})