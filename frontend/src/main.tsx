import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Layout from './layout/Layout.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout><App /></Layout>} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
)
