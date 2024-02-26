import React from 'react';
import App from './App.jsx';
import './assets/CSS/index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Cart_Provider } from './ContextAPI/Cart_Context.jsx';
import { ProductContext } from './ContextAPI/ProductContext.jsx';
import { FilterContextProvider } from './ContextAPI/FilterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProductContext>
                <FilterContextProvider>
                    <Cart_Provider>
                        <App />
                    </Cart_Provider>
                </FilterContextProvider>       
            </ProductContext>
        </BrowserRouter>
    </React.StrictMode>
)
