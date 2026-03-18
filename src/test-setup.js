import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
    t: (key) => {
      if (key.includes('items')) return []; 
      if (key.includes('title') || key.includes('name')) return 'Simon Hurtado';
        return key; 
    },
    i18n: { changeLanguage: () => Promise.resolve(), language: 'es' },
    }),
    initReactI18next: { type: '3rdParty', init: () => {} },
}));