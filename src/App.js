import './App.css';
import Footers from './components/footr';
import AppRouter from './components/router';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
        <Footers />
      </Provider>
    </>
  );
}

export default App;
