import logo from './logo.svg';
import './App.css';
import List from './List'
import Menu from './Menu'
import Title from './Title'

function App() {
  return (
      <div>
          <div className="app">
            <Title />
            <Menu />
            <List />
          </div>
      </div>
  );
}

export default App;
