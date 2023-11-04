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

        <button className={`${className} `} onClick={() => { handleChange(); handleState() }}>
            {isPortuguese ? "EN" : "PT"}
        </button>
    )
}

export default LangSelector;