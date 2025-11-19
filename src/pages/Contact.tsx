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

export default function Contact(){
  const [locale] = useLocale()
  const copy = getCopy(locale)

  return (
    <Layout>
      <HeroCover title={copy.contact.hero} />
      <Section>
        <Container>
          <FadeStagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeItem>
                <div className="md:col-span-2 rounded-2xl bg-white border border-[#E5E5E5] p-6">
                  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className="border border-[#E5E5E5] rounded-lg px-4 py-3" placeholder={copy.contact.form.name} />
                    <input className="border border-[#E5E5E5] rounded-lg px-4 py-3" placeholder={copy.contact.form.email} />
                    <input className="border border-[#E5E5E5] rounded-lg px-4 py-3" placeholder={copy.contact.form.phone} />
                    <input className="border border-[#E5E5E5] rounded-lg px-4 py-3" placeholder={copy.contact.form.country} />
                    <select className="border border-[#E5E5E5] rounded-lg px-4 py-3 sm:col-span-2">
                      <option>{copy.contact.form.projectType}</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Hospitality</option>
                    </select>
                    <textarea rows={6} className="border border-[#E5E5E5] rounded-lg px-4 py-3 sm:col-span-2" placeholder={copy.contact.form.message} />
                    <button type="button" className="sm:col-span-2 inline-flex items-center px-5 py-3 rounded-full bg-[#1A1A1A] text-white hover:opacity-90 transition">{copy.contact.form.submit}</button>
                  </form>
                </div>
              </FadeItem>
              <FadeItem>
                <div className="rounded-2xl bg-white border border-[#E5E5E5] p-6">
                  <div className="font-medium">{copy.footer.contact}</div>
                  <div className="mt-4 text-[#6B6B6B] space-y-2">
                    <div>{copy.contact.info.email}</div>
                    <div>{copy.contact.info.phone}</div>
                    <div>{copy.contact.info.location}</div>
                  </div>
                </div>
              </FadeItem>
            </div>
          </FadeStagger>
        </Container>
      </Section>
    </Layout>
  )
}
