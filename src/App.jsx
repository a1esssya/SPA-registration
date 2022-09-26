import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import MainPage from './MainPage';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <MainPage />
    </ReduxProvider>
  );
}
