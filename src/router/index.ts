import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/shop', component: () => import('@/views/ShopView.vue') },
    { path: '/produkt/:slug', component: () => import('@/views/ProductView.vue') },
    { path: '/kategorien', component: () => import('@/views/CategoriesView.vue') },
    { path: '/kategorie/:category', component: () => import('@/views/CategoryView.vue') },
    { path: '/ueber-uns', component: () => import('@/views/AboutView.vue') },
    { path: '/kontakt', component: () => import('@/views/ContactView.vue') },
    { path: '/faq', component: () => import('@/views/FaqView.vue') },
    { path: '/impressum', component: () => import('@/views/legal/LegalPage.vue'), props: { title: 'Impressum', note: 'Hier gehören unter anderem vollständige Firmenanschrift, Vertretungsberechtigte, Registerangaben und weitere verpflichtende Informationen hinein.' } },
    { path: '/datenschutz', component: () => import('@/views/legal/LegalPage.vue'), props: { title: 'Datenschutzerklärung', note: 'Hier müssen die tatsächlich eingesetzten Dienste, Hosting, Kontaktwege, Cookies, Analyse-Tools und Betroffenenrechte beschrieben werden.' } },
    { path: '/agb', component: () => import('@/views/legal/LegalPage.vue'), props: { title: 'Allgemeine Geschäftsbedingungen', note: 'AGB sind kein Text, den wir blind übernehmen sollten. Sie müssen zum echten Verkaufs- und Lieferprozess passen.' } },
    { path: '/widerruf', component: () => import('@/views/legal/LegalPage.vue'), props: { title: 'Widerrufsbelehrung', note: 'Bei Verkäufen an Verbraucher sind Widerrufsinformationen und gegebenenfalls ein Muster-Widerrufsformular erforderlich. Der konkrete Text muss vor Livegang geprüft werden.' } },
  ],
})
