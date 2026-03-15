# AGENTS.md - Developer Guidelines for Simon Hurtado Portfolio

## Project Overview
This is a React 18 + Vite portfolio website using styled-components for styling, GSAP for animations, and react-icons. The project is written in JavaScript (JSX), not TypeScript.

## Build Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Note**: This project currently has no test framework configured. If adding tests, use Vitest (matches Vite) or Jest.

## Code Style Guidelines

### File Naming Conventions
- React components: `PascalCase.jsx` (e.g., `Header.jsx`, `Body.jsx`)
- Styled components: `PascalCase.Style.jsx` or `PascalCase.Styled.jsx` (e.g., `Header.Style.jsx`, `Button.Styled.jsx`)
- Utility files: `camelCase.js` (e.g., `skills.js`, `proyects.js`)

### Folder Structure
```
src/
├── components/          # React components
│   ├── Header/
│   ├── Body/
│   ├── NavBar/
│   ├── AboutMe/
│   ├── Proyects/
│   ├── Experience/
│   ├── Contact/
│   └── StyledComponents/
│       ├── Header/
│       ├── NavBar/
│       ├── Texts/
│       └── ...
├── utils/               # Data/utilities
├── assets/             # Images, fonts, icons
├── fonts/              # Custom fonts
└── App.jsx             # Root component
```

### Import Conventions
- **Named imports** for styled-components: `import { Button } from "../StyledComponents/Button";`
- **Default imports** for React components: `import Header from "../Header/Header";`
- **Named imports** from react-icons: `import { RiLinkedinFill } from "react-icons/ri";`
- Order: React hooks → External libraries → Internal components → Styled components

### Formatting
- Use **double quotes** for strings (`"text"`)
- Use **2 spaces** for indentation
- Use semicolons at end of statements
- Component file template:
```jsx
import styled from "styled-components";

const ComponentName = () => {
    return (
        <Wrapper>
            {/* content */}
        </Wrapper>
    );
};

export default ComponentName;
```

### React Patterns
- Use **arrow functions** with `const`: `const Header = () => { ... }`
- Use **useLayoutEffect** for GSAP animations (runs before paint)
- Use **gsap.context()** for proper cleanup in React 18:
```jsx
useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // animations
    });
    return () => ctx.revert();
}, []);
```

### Styled Components
- Use **template literals** for CSS
- Use **props** for dynamic values: `font-size: ${props => props.size || "1rem"};`
- Prefix styled component files with descriptive category: `Header.Style.jsx`, `Button.Styled.jsx`

### Naming Conventions
- Components: PascalCase (`Header`, `Body`, `NavBar`)
- Styled components: PascalCase (`Button`, `HeaderStyled`)
- CSS classes: kebab-case (`.linkedin`, `.github`, `.header-info`)
- Variables/functions: camelCase

### Error Handling
- Use try/catch for async operations
- Always clean up animations/effects in useEffect return: `return () => ctx.revert();`
- Handle loading states explicitly (see App.jsx for loading pattern)

### Accessibility
- Include alt text for images
- Use semantic HTML elements (`<article>`, `<header>`, `<nav>`)
- Ensure icons in links have proper context

## Adding New Components

1. Create component folder in `src/components/`
2. Create JSX file: `src/components/ComponentName/ComponentName.jsx`
3. Create styled wrapper: `src/components/StyledComponents/ComponentName/ComponentName.Style.jsx`
4. Export both and import styled component inside the component

## Adding Dependencies

This project uses:
- `react` & `react-dom` - UI framework
- `styled-components` - CSS-in-JS styling
- `gsap` - Animations
- `react-icons` - Icon library
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

When adding new dependencies, verify compatibility with React 18 and Vite 3.

## Development Notes

- The portfolio has a 5.5 second loading animation
- GSAP timeline delays are synchronized with the loading animation (delay: 2.7, 3.1, etc.)
- Custom fonts are loaded from `src/fonts/`
- Logo assets in `src/assets/logos/` (both SVG and PNG formats)
