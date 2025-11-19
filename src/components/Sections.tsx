import React from 'react'
import { motion } from 'framer-motion'

export const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className='' }) => (
  <section className={`py-16 sm:py-24 lg:py-[120px] ${className}`}>{children}</section>
)

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className='' }) => (
  <div className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 ${className}`}>{children}</div>
)

export const FadeStagger: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
    {children}
  </motion.div>
)

export const FadeItem: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } } }}>
    {children}
  </motion.div>
)
