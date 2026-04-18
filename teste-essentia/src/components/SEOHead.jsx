import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSiteOrigin, PAGE_SEO, SITE_NAME } from '../config/seo.js'

function upsertMeta(attr, key, value) {
  if (!value) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEOHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = getSiteOrigin()
    const entry = PAGE_SEO[pathname] ?? PAGE_SEO['/']
    const path = pathname === '/' ? '/' : pathname
    const canonical = origin ? `${origin}${path === '/' ? '' : path}` : ''

    document.title = entry.title
    upsertMeta('name', 'description', entry.description)
    upsertMeta('property', 'og:title', entry.title)
    upsertMeta('property', 'og:description', entry.description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'pt_BR')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', entry.title)
    upsertMeta('name', 'twitter:description', entry.description)

    if (canonical) {
      upsertMeta('property', 'og:url', canonical)
      upsertLink('canonical', canonical)
    }

    upsertMeta(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    )
  }, [pathname])

  useEffect(() => {
    const json = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      description: PAGE_SEO['/'].description,
      inLanguage: 'pt-BR',
      ...(getSiteOrigin() ? { url: getSiteOrigin() + '/' } : {}),
    }
    const id = 'ld-json-website'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(json)
  }, [])

  return null
}
