import logo from './logo.svg';
import './App.css';
import './style.scss'
import { Header } from './components/Header';
import { Button } from './components/button';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
    <Button/>
    <TodoList/>
    <Footer/>
  
    </div>
  );
}

export default App;
