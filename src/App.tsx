import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { FullCard } from './pages/FullCard';
import { BreadCrumbs } from './components/BreadCrumbs';
import { Routes, Route } from 'react-router-dom';
import '../src/scss/app.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="wrapper">
        <Header />
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/card/:id" element={<FullCard />} />
          <Route path="/Admin" element={<h1>Admin</h1>} />
        </Routes>

        {
          //@-ts-ignore
          !location.pathname.includes('card') && <Footer />
        }
      </div>
    </>
  );
}

export default App;
