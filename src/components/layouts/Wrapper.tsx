import { RevealWrapper } from 'next-reveal'

const Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  { className, children },
  props
) => {
  return (
    <RevealWrapper origin='top'>
      <section className="" {...props}>
        <div className={"" + className}>
          {children}
        </div>
      </section>
    </RevealWrapper>
  )
}

export default Wrapper
