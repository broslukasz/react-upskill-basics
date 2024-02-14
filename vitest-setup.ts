import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';
import { server } from './setupServer';

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
