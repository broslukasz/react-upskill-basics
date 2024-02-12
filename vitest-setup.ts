import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';
import { server } from './setupServer';

// Start server before all tests
// eslint-disable-next-line no-undef
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
// eslint-disable-next-line no-undef
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
// eslint-disable-next-line no-undef
afterEach(() => server.resetHandlers());
