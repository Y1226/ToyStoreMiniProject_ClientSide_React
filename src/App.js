import { LoadRoutes } from './Components/LoadRoutes';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './Style/style.css'
import './App.css';


function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <LoadRoutes></LoadRoutes>
    </BrowserRouter>
  </Provider>
}

export default App;
