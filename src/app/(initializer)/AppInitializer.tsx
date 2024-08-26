'use client';

import { getQueryClient } from '@/app/(configs)/query/config';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type AppInitializerProps = {
  children: React.ReactNode;
};

const AppInitializer = ({ children }: AppInitializerProps) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default AppInitializer;
