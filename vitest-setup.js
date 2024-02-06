import { handlers } from './mocks/handlers.ts';
import { setupServer } from 'msw/node';

import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';

const server = setupServer(handlers);

// Start server before all tests
// eslint-disable-next-line no-undef
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
// eslint-disable-next-line no-undef
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
// eslint-disable-next-line no-undef
afterEach(() => server.resetHandlers());
