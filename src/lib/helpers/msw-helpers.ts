export const handlerTemplate = `import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

// https://www.npmjs.com/package/@faker-js/faker
// Intercept "GET https://example.com/user" requests...
const userHandler = http.get('api/user', () => {
  // ...and respond to them using this JSON response.
  return HttpResponse.json({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  });
}); 

export const handlers = [userHandler];
` as const

export const browserTemplate = `import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'
 
export const worker = setupWorker(...handlers)` as const

export const endMessage = `
// https://mswjs.io/docs/integrations/node
// https://mswjs.io/docs/integrations/browser
// add where required


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../mocks/browser');

  // \`worker.start()\` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

// Create a client
const queryClient = new QueryClient();

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
});

import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

function useGetQuery() {
    const api = axios.create({baseURL: '/api/'});
    const fetchUser = () => api.get('/user').then((x) => x.data);
    return useQuery({ queryKey: ['get'], queryFn: fetchUser });
}
` as const

export const dbTemplate = `
import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker';

export const db = factory({
  // Create a "user" model,
  user: {
    // ...with these properties and value getters.
    id: primaryKey(faker.string.uuid),
    firstName: () => 'John',
    lastName: () => 'Maverick',
    type:String
  },
})
` as const
