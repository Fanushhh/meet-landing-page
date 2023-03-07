import './App.scss';
import { data } from './data';
import About from './components/About/About';
import Description from './components/Description/Description';
import Cta from './components/Cta/Cta';

function App() {
  return (
    <main className="app">
      <About props={data} />
      <Description props={data} />
      <Cta props={data} />
    </main>
  );
}

export default App;
