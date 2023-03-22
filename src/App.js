import './App.scss';
import { AddititonalServices } from './Components/AdditionalServices/AddititonalServices';
import { Benefits } from './Components/Benefits/Benefits';
import { Cities } from './Components/Cities/Cities';
import { Cleaning } from './Components/Cleaning/Cleaning';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { News } from './Components/News/News';
import { Partners } from './Components/Partners/Partners';
import { Questions } from './Components/Questions/Questions';
import { Services } from './Components/Services/Services';
import { Slider } from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slider />
      <Benefits />
      <Cleaning />
      <Services />
      <AddititonalServices />
      <Questions />
      <Partners />
      <Cities />
      <News />
    </div>
  );
}

export default App;
