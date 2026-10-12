import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import App from './App.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: '#d47a99',
          colorBgContainer: '#ffffff',
          colorText: '#4a2e3b',
          fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
          borderRadius: 16,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);