import React from 'react';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { User } from './component/user';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='main-wrapper'>
        <User />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
