import { RevealWrapper } from 'next-reveal'

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  { className, children },
  props
) => {
  return (
    <RevealWrapper origin='top'>
      <section className={"section px-5 py-32 " + className} {...props}>
        <div className="w-full max-w-6xl mx-auto">
          {children}
        </div>
      </section>
    </RevealWrapper>
  )
}

export default Section
