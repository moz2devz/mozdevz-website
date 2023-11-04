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
    const [selectedLanguage, setSelectedLanguage] = useState("PT")
    const {
        lang: { menuItems, staticContent },
        handleChange,
    } = useContext(LangContext)

    const handleState = () => {


        if (selectedLanguage === "PT") {
            setSelectedLanguage("EN")
        }
        else {
            setSelectedLanguage("PT")
        }
    }


    return (
        <a className={`${className} button`} onClick={() => { handleChange(); handleState() }}>
            {selectedLanguage}
        </a>
    )
}

export default LangSelector;