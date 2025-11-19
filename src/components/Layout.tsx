import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { locales, getCopy, Locale } from '@/i18n/translations'

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 ${className}`}>{children}</div>
)

function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('locale') as Locale) || 'en')
  useEffect(() => { localStorage.setItem('locale', locale) }, [locale])
  return { locale, setLocale }
}

const navLinkClass = ({ isActive }: { isActive: boolean }) => `px-3 py-2 text-sm tracking-wide ${isActive ? 'text-[#1A1A1A]' : 'text-[#2C2C2C]'} hover:text-[#1A1A1A]`;

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { locale, setLocale } = useLocale()
  const copy = getCopy(locale)
  const [open, setOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setCollectionsOpen(false); setAboutOpen(false) }, [pathname])

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C2C2C]">
      {/* Nav */}
      <div className="fixed top-0 inset-x-0 z-50">
        <div className="backdrop-blur-xl bg-white/60 border-b border-[#E5E5E5]">
          <Container className="h-20 flex items-center justify-between">
            <Link to="/" className="font-light text-2xl tracking-tight">Trin</Link>

            <div className="hidden lg:flex items-center gap-6">
              <div className="group relative">
                <NavLink to="/" className={navLinkClass}>{copy.nav.home}</NavLink>
              </div>
              <div className="group relative">
                <span className="inline-flex items-center px-3 py-2 text-sm text-[#2C2C2C] hover:text-[#1A1A1A] cursor-default">{copy.nav.collections}<ChevronDown className="ml-1 h-4 w-4"/></span>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-200 absolute top-full left-0 pt-2">
                  <div className="bg-white shadow-xl rounded-xl border border-[#E5E5E5] p-3 grid grid-cols-2 gap-2 w-[420px]">
                    <NavLink to="/collections/kitchens" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.kitchens}</NavLink>
                    <NavLink to="/collections/living-rooms" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.living}</NavLink>
                    <NavLink to="/collections/wardrobes" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.wardrobes}</NavLink>
                    <NavLink to="/collections/bathrooms" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.bathrooms}</NavLink>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <span className="inline-flex items-center px-3 py-2 text-sm text-[#2C2C2C] hover:text-[#1A1A1A] cursor-default">{copy.nav.about}<ChevronDown className="ml-1 h-4 w-4"/></span>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-200 absolute top-full left-0 pt-2">
                  <div className="bg-white shadow-xl rounded-xl border border-[#E5E5E5] p-3 grid grid-cols-1 gap-2 w-[300px]">
                    <NavLink to="/about/our-story" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.story}</NavLink>
                    <NavLink to="/about/craftsmanship" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.craft}</NavLink>
                    <NavLink to="/about/sustainability" className="px-3 py-2 rounded hover:bg-[#FAFAFA] text-sm">{copy.nav.sustainability}</NavLink>
                  </div>
                </div>
              </div>
              <NavLink to="/showrooms" className={navLinkClass}>{copy.nav.showrooms}</NavLink>
              <NavLink to="/contact" className={navLinkClass}>{copy.nav.contact}</NavLink>
              <div className="flex items-center gap-2">
                {locales.map(l => (
                  <button key={l.code} onClick={() => setLocale(l.code)} className={`px-2 py-1 text-xs rounded ${locale===l.code? 'bg-[#1A1A1A] text-white':'hover:bg-[#FAFAFA]'}`}>{l.label}</button>
                ))}
              </div>
            </div>

            <button className="lg:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Menu">
              {open ? <X/> : <Menu/>}
            </button>
          </Container>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white/90 backdrop-blur-xl border-b border-[#E5E5E5] lg:hidden">
              <Container className="py-4">
                <div className="space-y-2">
                  <NavLink to="/" className="block px-3 py-2 text-sm">{copy.nav.home}</NavLink>
                  <details open={collectionsOpen} onToggle={(e) => setCollectionsOpen((e.target as HTMLDetailsElement).open)}>
                    <summary className="px-3 py-2 text-sm cursor-pointer flex items-center justify-between">{copy.nav.collections} <ChevronDown className="h-4 w-4"/></summary>
                    <div className="pl-3 pb-2 space-y-1">
                      <NavLink to="/collections/kitchens" className="block px-3 py-2 text-sm">{copy.nav.kitchens}</NavLink>
                      <NavLink to="/collections/living-rooms" className="block px-3 py-2 text-sm">{copy.nav.living}</NavLink>
                      <NavLink to="/collections/wardrobes" className="block px-3 py-2 text-sm">{copy.nav.wardrobes}</NavLink>
                      <NavLink to="/collections/bathrooms" className="block px-3 py-2 text-sm">{copy.nav.bathrooms}</NavLink>
                    </div>
                  </details>
                  <details open={aboutOpen} onToggle={(e) => setAboutOpen((e.target as HTMLDetailsElement).open)}>
                    <summary className="px-3 py-2 text-sm cursor-pointer flex items-center justify-between">{copy.nav.about} <ChevronDown className="h-4 w-4"/></summary>
                    <div className="pl-3 pb-2 space-y-1">
                      <NavLink to="/about/our-story" className="block px-3 py-2 text-sm">{copy.nav.story}</NavLink>
                      <NavLink to="/about/craftsmanship" className="block px-3 py-2 text-sm">{copy.nav.craft}</NavLink>
                      <NavLink to="/about/sustainability" className="block px-3 py-2 text-sm">{copy.nav.sustainability}</NavLink>
                    </div>
                  </details>
                  <NavLink to="/showrooms" className="block px-3 py-2 text-sm">{copy.nav.showrooms}</NavLink>
                  <NavLink to="/contact" className="block px-3 py-2 text-sm">{copy.nav.contact}</NavLink>
                  <div className="flex items-center gap-2 px-3 pt-2">
                    {locales.map(l => (
                      <button key={l.code} onClick={() => setLocale(l.code)} className={`px-2 py-1 text-xs rounded ${locale===l.code? 'bg-[#1A1A1A] text-white':'hover:bg-[#FAFAFA]'}`}>{l.label}</button>
                    ))}
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white mt-24">
        <Container className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="text-2xl font-light">Trin</div>
            <div className="mt-4 flex gap-4 text-white/70">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5"/></a>
            </div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">{copy.footer.collections}</div>
            <ul className="mt-4 space-y-2 text-white/90">
              <li><Link to="/collections/kitchens" className="hover:underline">{copy.nav.kitchens}</Link></li>
              <li><Link to="/collections/living-rooms" className="hover:underline">{copy.nav.living}</Link></li>
              <li><Link to="/collections/wardrobes" className="hover:underline">{copy.nav.wardrobes}</Link></li>
              <li><Link to="/collections/bathrooms" className="hover:underline">{copy.nav.bathrooms}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">{copy.footer.company}</div>
            <ul className="mt-4 space-y-2 text-white/90">
              <li><Link to="/about/our-story" className="hover:underline">{copy.nav.story}</Link></li>
              <li><Link to="/about/craftsmanship" className="hover:underline">{copy.nav.craft}</Link></li>
              <li><Link to="/about/sustainability" className="hover:underline">{copy.nav.sustainability}</Link></li>
              <li><Link to="/showrooms" className="hover:underline">{copy.nav.showrooms}</Link></li>
              <li><Link to="/contact" className="hover:underline">{copy.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">{copy.footer.support}</div>
            <ul className="mt-4 space-y-2 text-white/90">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Care & Maintenance</a></li>
              <li><a href="#" className="hover:underline">Warranty</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">{copy.footer.contact}</div>
            <ul className="mt-4 space-y-2 text-white/90">
              <li>info@trinfurniture.com</li>
              <li>+355 4 123 4567</li>
              <li>Tirana, Albania</li>
            </ul>
          </div>
        </Container>
        <div className="border-t border-white/10">
          <Container className="py-6 text-sm text-white/70">{copy.footer.bottom}</Container>
        </div>
      </footer>
    </div>
  )
}
