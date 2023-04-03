import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = memo (function LanguageSelector ({className}) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  function handleChangeLanguage(language) {
    setCurrentLanguage(language.target.value);
    i18n.changeLanguage(language.target.value);
  }
  return (
    <select className={className} value={currentLanguage} onChange={handleChangeLanguage}>
      <option value="en-US">English</option>
      <option value="pt-BR">Português (Brasil)</option>
    </select>
  )
});

export default LanguageSelector;