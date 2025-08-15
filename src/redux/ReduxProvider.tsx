'use client';
// 'use client';

// import { Provider } from 'react-redux';
// import { makeStore } from './store';

// export function ReduxProvider({ children }: { children: React.ReactNode }) {
//   const store = makeStore(); 
//   return <Provider store={store}>{children}</Provider>;
// }

// ReduxProvider.tsx

import { Provider } from 'react-redux';
import { store } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}