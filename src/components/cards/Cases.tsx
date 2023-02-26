import { ArrowRight } from "phosphor-react";
import { IconProps } from "phosphor-react";

interface CasesProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  question: string;
  answer: string;
}

const Cases: React.FC<CasesProps> = ({ Icon, question, answer }) => {
  return (
    <div className="max-w-xs bg-[#f2f3f5] rounded p-5 pb-3 pt-12 overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-red-500/90 hover:text-white hover:-translate-y-1">
      <div className="h-52 py-2 overflow-hidden">
        <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-700">
          <Icon
            size={56}
            className=""
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
              {question}
            </h3>
            <p className="mt-4">
              {answer}
            </p>
          </div>
          <ArrowRight
            size={32}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Cases;