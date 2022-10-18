import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.variable.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoreEbryos from './App/page/MoreEmbryos';
import EmbryosManagement from './App/page/EmbryoManagement';
import ListCard from '../src/App/page/ListCard';
import CreateCard from '../src/App/page/CreateCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path='/' element={<ListCard/>}/>
          <Route path='createcard' element={<CreateCard />}/>
          <Route path="themphoi" element={<MoreEbryos />} />
          <Route path="quanlyphoi" element={<EmbryosManagement />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
