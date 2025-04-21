import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
<Toaster/>
       <ToastContainer/>
    </BrowserRouter>
   </Provider>
)
