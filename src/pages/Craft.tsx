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

export default function Craft(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.craft.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10">
              {copy.craft.steps.map((s, i) => (
                <FadeItem key={i}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 text-center">{i+1}. {s}</div>
                </FadeItem>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xl text-[#1A1A1A]">Materials</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                {copy.craft.materials.map((m,i) => (
                  <FadeItem key={i}><div className="rounded-lg border border-[#E5E5E5] bg-white p-4 text-center">{m}</div></FadeItem>
                ))}
              </div>
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
