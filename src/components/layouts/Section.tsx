import { RevealWrapper } from  'next-reveal'

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  { className, children },
  props
) => {
  return (
    <RevealWrapper origin='top' reset={true}>
      <section className="section px-5 pt-16 pb-32" {...props}>
        <div className={"w-full max-w-6xl mx-auto " + className}>
          {children}
        </div>
      </section>
    </RevealWrapper>
  )
}

export default Section
