import { ArrowRight } from "phosphor-react";
import { IconProps } from "phosphor-react";

interface CasesProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  question: string;
  answer: string;
}

const Cases: React.FC<CasesProps> = ({ Icon, question, answer }) => {
  return (
    <div className="max-w-xs bg-[#f2f3f5] rounded p-5 pt-12 overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-blue-500 hover:text-white hover:-translate-y-6">
      <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-500">
        <Icon
          size={56}
          className="transition-opacity duration-500 group-hover:opacity-0"
        />
        <div>
          <h3 className="text-xl text-gray-800 font-bold">
            {question}
          </h3>
          <p className="mt-4">
            {answer}
          </p>
        </div>

        <ArrowRight
          size={32}
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}

export default Cases;