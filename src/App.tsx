// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './core/frameworks/redux';
import { MoviePresenter } from './movies/presentation';

function App() {
  return (
    <Provider store={store}>
      <MoviePresenter />
    </Provider>
  );
}

export default App;
