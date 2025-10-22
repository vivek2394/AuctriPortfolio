import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollingHome from './pages/ScrollingHome';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollingHome />} />
        <Route path="/terms" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Terms />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Privacy />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
