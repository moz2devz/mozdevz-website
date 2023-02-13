const Hero:React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }, props) => {
  return (
    <div className={"bg-cover bg-center p-5 w-full relative z-0 " + className}>
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
          { children }
        </div>
      </div>
      <div className="absolute z-10 bg-black/50 w-full h-full top-0 left-0"></div>
    </div>
  )
}

export default Hero;