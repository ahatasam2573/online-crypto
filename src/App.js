import { Route, Routes } from "react-router-dom";
import { Header, Home, Coins, Exchanges, CoinDetails } from './components';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
      </Routes>
    </>

  );
}

export default App;
