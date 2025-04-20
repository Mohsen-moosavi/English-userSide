'use client';

import { Provider } from 'react-redux';
import { makeStore } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const store = makeStore(); // یا می‌تونی از useMemo هم استفاده کنی
  return <Provider store={store}>{children}</Provider>;
}