import React from 'react';
import QueryClientProvider from './src/QueryClientProvider';
import UsersScreen from './src/screens/UsersScreen';

export default function App() {
  return (
    <QueryClientProvider>
      <UsersScreen />
    </QueryClientProvider>
  );
}
