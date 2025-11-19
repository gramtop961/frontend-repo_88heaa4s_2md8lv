import React from 'react'
import { Layout } from '@/components/Layout'
import { HeroCover } from '@/components/HeroCover'
import { Section, Container, FadeStagger, FadeItem } from '@/components/Sections'
import { getCopy, Locale } from '@/i18n/translations'

function useLocale(): [Locale, (l: Locale)=>void] {
  const [l, setL] = React.useState<Locale>(() => (localStorage.getItem('locale') as Locale) || 'en')
  React.useEffect(()=>{ localStorage.setItem('locale', l) }, [l])
  return [l, setL]
}

export default function Sustainability(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.sustainability.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              {copy.sustainability.initiatives.map((s, i) => (
                <FadeItem key={i}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">{s}</div>
                </FadeItem>
              ))}
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
