import './App.css';
import GetQuestion from './components/GetQuestion';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Counter />
      <h2>Let's Play!</h2>
      <GetQuestion />
    </div>
  );
}

export default App;
