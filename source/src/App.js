import logo from './logo.svg';
import './App.css';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Swatch } from './Swatch';
import { Example } from './Example';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Theme switcher example</h1>
        <Example />
        <ThemeSwitcher />
        <Swatch />
      </header>
    </div>
  );
}

export default App;
