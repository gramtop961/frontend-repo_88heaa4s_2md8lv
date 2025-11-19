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

export default function Bathrooms(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.bathrooms.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {copy.bathrooms.collections.map((c, i) => (
                <FadeItem key={i}>
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E5E5]">
                    <img src={`https://source.unsplash.com/1600x900/?bathroom,luxury,${i}`} alt="Bathroom" loading="lazy" className="h-64 w-full object-cover"/>
                    <div className="p-6 text-[#2C2C2C]">{c}</div>
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
