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

export default function Story(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.story.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="space-y-4">
              {copy.story.timeline.map((item, i) => (
                <FadeItem key={i}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">{item}</div>
                </FadeItem>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {copy.story.values.map((v, i) => (
                <FadeItem key={i}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 text-center">{v}</div>
                </FadeItem>
              ))}
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
