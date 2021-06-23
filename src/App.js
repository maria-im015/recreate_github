import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import Footer from './components/Footer';

function App() {
  return (
    <main class="App">
      <NavigationBar />
      <HeroSection />
      <StatsBar />
      <Footer />
    </main>
  );
}

export default App;
