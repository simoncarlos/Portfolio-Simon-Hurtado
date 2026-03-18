import { render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('Debería cargar la aplicación y mostrar el logo', async () => {
    render(<App />);

    await waitFor(() => {
        const logo = screen.getByAltText(/Logotipo Mondrian/i);
        expect(logo).toBeInTheDocument();
    }, { timeout: 8000 });
}, 12000);