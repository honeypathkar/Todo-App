//import logo from './logo.svg';
import './App.css';
//import TextBox from './components/TextBox';

function App() {
  return (
    <>
    <div id="todoapp">
      <header id="header">
          <h1 className="my-6">todos</h1>
          <input id="new-todo" placeholder="What needs to be done?" autoFocus/>
      </header>
    </div>
    </>
  );
}

export default App;
