import { QueryClient } from '@tanstack/react-query';

export function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {},
      mutations: {},
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
