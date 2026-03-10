interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#0D0A09] border-b-2 border-[#8B1E1C] py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#8B1E1C]" />
            <span className="text-[#B8892F] text-[0.7rem] font-bold tracking-[0.2em] uppercase">{eyebrow}</span>
          </div>
        )}
        <h1
          className="text-[#F6F1E8] leading-none tracking-wide"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[rgba(246,241,232,0.55)] text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
