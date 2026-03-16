import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContainer, LanguageButton, LanguageMenu } from "../StyledComponents/LanguageSelector/LanguageSelector.Style";

const languages = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "ko", flag: "🇰🇷", label: "한국어" }
];
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const handleChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setIsOpen(false);
  };
  return (
    <LanguageContainer>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        {currentLang.flag}
      </LanguageButton>
      {isOpen && (
        <LanguageMenu>
          {languages.map(lang => (
            <LanguageButton 
              key={lang.code} 
              onClick={() => handleChange(lang.code)}
              $active={lang.code === i18n.language}
            >
              {lang.flag} {lang.label}
            </LanguageButton>
          ))}
        </LanguageMenu>
      )}
    </LanguageContainer>
  );
};
export default LanguageSelector;