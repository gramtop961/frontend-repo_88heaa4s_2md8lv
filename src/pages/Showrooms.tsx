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

export default function Showrooms(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.showrooms.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <FadeItem>
                <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E5E5]">
                  <img src={`https://source.unsplash.com/1600x900/?showroom,interior,1`} alt="Tirana" loading="lazy" className="h-64 w-full object-cover"/>
                  <div className="p-6">
                    <div className="font-medium">Tirana</div>
                    <div className="text-sm text-[#6B6B6B]">{copy.showrooms.tirana.address} • {copy.showrooms.tirana.hours} • {copy.showrooms.tirana.size}</div>
                  </div>
                </div>
              </FadeItem>
              <FadeItem>
                <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E5E5]">
                  <img src={`https://source.unsplash.com/1600x900/?showroom,interior,2`} alt="Durrës" loading="lazy" className="h-64 w-full object-cover"/>
                  <div className="p-6">
                    <div className="font-medium">Durrës</div>
                    <div className="text-sm text-[#6B6B6B]">{copy.showrooms.durres.address} • {copy.showrooms.durres.hours}</div>
                  </div>
                </div>
              </FadeItem>
            </div>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-full bg-[#1A1A1A] text-white hover:opacity-90 transition">{copy.showrooms.cta}</Link>
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
