import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { TodosProvider } from './context/TodosContext';

function App() {
  return (
    <div className="App">
      <Header />
      <TodosProvider>
        <Editor />
        <List />
      </TodosProvider>
    </div>
  );
}

export default App;
