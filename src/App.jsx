import './App.css';
import Header from "./components/Header"
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <div className="bg">
        <Header />
        <section id="content">
        <Content />

        </section>
      </div>
    </div>
  );
}

export default App;
