import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export const HeroCover: React.FC<{ title: string; subtitle?: string; cta?: React.ReactNode }> = ({ title, subtitle, cta }) => {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#FAFAFA]" />
      </div>

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 pb-20">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white text-5xl sm:text-6xl lg:text-[72px] font-light leading-tight">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-4 text-white/90 max-w-3xl text-base sm:text-lg lg:text-xl">
              {subtitle}
            </motion.p>
          )}
          {cta && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-8">
              {cta}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
