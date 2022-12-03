import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createMemoryRouter, createRoutesFromElements, Route, Routes, Outlet } from 'react-router';
import Onboard from './screens/Onboard';
import SetPassword from './screens/SetPassword';
import WalletName from './screens/WalletName';
import AddGuardians from './screens/AddGuardians';
import theme from './theme';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<Outlet />}
    >
      <Route
        path="/"
        element={<Onboard />}
      />
      {/* Create */}
      <Route
        path="create"
        element={<SetPassword />}
      >
        <Route
          path="1"
          element={<WalletName />}
        />
        <Route
          path="2"
          element={<AddGuardians />}
        />
      </Route>
    </Route>
  ),
  {
    initialEntries: ['/'],
    initialIndex: 1,
  }
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box
        maxW="20rem"
        maxH="35.5rem"
        w="20rem"
        h="35.5rem"
        m="auto"
        borderRadius={'1.25rem'}
        overflow="hidden"
        boxShadow="0px 4px 40px rgba(0, 0, 0, 0.1)"
      >
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
