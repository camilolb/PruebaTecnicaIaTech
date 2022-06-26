// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './core/frameworks/redux';

import { MovieNavigation } from './shared/navigation';

function App() {
  return (
    <Provider store={store}>
      <MovieNavigation />
    </Provider>
  );
}

export default App;
