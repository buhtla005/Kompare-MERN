import React from 'react';
import Homepage from './pages/Homepage'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Homepage/>
      </Provider>
    </div>
  );
}

export default App;
