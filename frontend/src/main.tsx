import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { NotificationComponent } from './notifications/NotificationComponent';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <NotificationComponent />
      <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
)
