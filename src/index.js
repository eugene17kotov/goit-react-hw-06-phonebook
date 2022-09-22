import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';
import { theme } from 'utils/theme';
import { MyStyleReset } from 'utils/resetStyles';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyStyleReset />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="goit-react-hw-06-phonebook">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
