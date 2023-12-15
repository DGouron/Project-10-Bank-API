import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { AppStore, RootState } from 'config/redux/store';

import usersFiltersSlice from 'components/organisms/usersFilters/usersFiltersSlice';

import offersSlice from 'containers/school/Offers_v3/controller/offersManagementSlice';
import studentsManagementSlice from 'containers/school/Students/StudentsManagement/studentsManagementSlice';
// As a basic setup, import your same slice reducers
import eventsSlice from 'containers/shared/Events/eventsSlice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {} as any,
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        events: eventsSlice,
        usersFilters: usersFiltersSlice,
        studentsManagement: studentsManagementSlice,
        offers: offersSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
