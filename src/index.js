import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ClothingStore from './store/ClothingStore';


export const Context = createContext(null);


ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      clothing: new ClothingStore()
    }}>
      <App />,
    </Context.Provider>,
  document.getElementById('root')
  );


