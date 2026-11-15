import { useState } from 'react';
import Header from './components/Header/Header';
import './styles/global.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        disabled={true}
      />
      <main>
        <h1>sigurna-tacka-digital</h1>
      </main>
    </div>
  );
}

export default App;


