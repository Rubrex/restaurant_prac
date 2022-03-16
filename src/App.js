import React from "react";
import MainComponent from "./components/MainComponents";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import myStore from "./redux/store";
import { Provider } from 'react-redux'

function App() {
  // window.store = myStore;
  console.log("App.js: ", myStore.getState());
  // myStore.subscribe(console.log("[Subscribe]: ", myStore.getState()))
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
