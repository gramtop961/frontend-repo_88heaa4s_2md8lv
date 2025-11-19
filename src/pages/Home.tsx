import React from 'react'
import { Layout } from '@/components/Layout'
import { HeroCover } from '@/components/HeroCover'
import { Section, Container, FadeStagger, FadeItem } from '@/components/Sections'
import { getCopy, Locale } from '@/i18n/translations'
import { Link } from 'react-router-dom'

function useLocale(): [Locale, (l: Locale)=>void] {
  const [l, setL] = React.useState<Locale>(() => (localStorage.getItem('locale') as Locale) || 'en')
  React.useEffect(()=>{ localStorage.setItem('locale', l) }, [l])
  return [l, setL]
}

export default function Home(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover
        title={copy.home.heroTitle}
        subtitle={copy.home.heroSubtitle}
        cta={<Link to="/collections/kitchens" className="inline-flex items-center px-5 py-3 rounded-full bg-white/90 text-[#1A1A1A] hover:scale-98 transition transform">{copy.home.cta}</Link>}
      />

      <Section>
        <Container>
          <FadeStagger>
            <FadeItem>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-light text-[#1A1A1A]">Collections</h2>
            </FadeItem>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {[
                { title: getCopy(locale).nav.kitchens, href: '/collections/kitchens', img: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=1600&auto=format&fit=crop' },
                { title: getCopy(locale).nav.living, href: '/collections/living-rooms', img: 'https://images.unsplash.com/photo-1616596872423-6b95c2d7416e?q=80&w=1600&auto=format&fit=crop' },
                { title: getCopy(locale).nav.wardrobes, href: '/collections/wardrobes', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop' },
              ].map((c) => (
                <FadeItem key={c.title}>
                  <Link to={c.href} className="group block overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                    <div className="overflow-hidden">
                      <img src={`${c.img}&fm=webp`} alt={c.title} loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div className="text-lg text-[#1A1A1A]">{c.title}</div>
                      <div className="h-px flex-1 mx-4 bg-[#E5E5E5]"/>
                      <span className="text-[#8B7355]">→</span>
                    </div>
                  </Link>
                </FadeItem>
              ))}
            </div>
          </FadeStagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeStagger>
            <FadeItem>
              <h3 className="text-[36px] sm:text-[48px] lg:text-[56px] font-light text-[#1A1A1A]">{copy.home.philosophyTitle}</h3>
            </FadeItem>
            <FadeItem>
              <p className="mt-4 max-w-3xl text-[#6B6B6B] text-base sm:text-lg">{copy.home.philosophyBody}</p>
            </FadeItem>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[{n:'25+', l: copy.home.stats.years},{n:'5000+', l: copy.home.stats.projects},{n:'15', l: copy.home.stats.countries},{n:'100%', l: copy.home.stats.custom}].map((s) => (
                <FadeItem key={s.l}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 text-center">
                    <div className="text-3xl text-[#1A1A1A]">{s.n}</div>
                    <div className="text-sm text-[#6B6B6B] mt-1">{s.l}</div>
                  </div>
                </FadeItem>
              ))}
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
