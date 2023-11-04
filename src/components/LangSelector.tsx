import { LangContext } from "@/contexts/langContext";
import { FC, useContext, useState } from "react";

interface SelectedLangProps {
    selectedLanguage?: string;
    className?: string
}
const LangSelector: FC<SelectedLangProps> = ({ className, ...props }) => {
    /**
     * 
     * selectedLanguage={selectedLanguage}
     */
    const [isPortuguese, setIsPortugues] = useState(true)
    const {
        lang: { menuItems, staticContent },
        handleChange,
    } = useContext(LangContext)

    const handleState = () => {


        setIsPortugues(!isPortuguese)
    }


    return (

        <button className={`${className} text-white border border-primary bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center `} onClick={() => { handleChange(); handleState() }}>
            {isPortuguese ? "EN" : "PT"}
        </button>
    )
}

export default LangSelector;