import Provider from './context/Provider';
import Home from './pages/Home';

export default function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}