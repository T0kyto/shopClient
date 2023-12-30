import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import UserStore from "./store/UserStore";
import ItemsStore from "./store/ItemsStore";

interface IAppContext{
    user: UserStore
    items: ItemsStore
}

export const AppContext = React.createContext<IAppContext>({user: new UserStore(), items: new ItemsStore()})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);