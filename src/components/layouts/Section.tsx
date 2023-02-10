const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  { className, children },
  props
) => {
  return (
    <section className={'max-w-6xl mx-auto my-14 p-5 ' + className} {...props}>
      {children}
    </section>
  )
}

export default Section
