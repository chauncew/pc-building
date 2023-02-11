import './App.css';
import LandingPage from './components/landingPage'
import WhyAPc from './components/WhyAPc'
import DreamPC from './components/DreamPC'
import Parts from './components/Parts'
import MoreInfo from './components/MoreInfo'
import Footer from './components/Footer';



function App() {
  return (
    <main className="App">
      <LandingPage />
      <WhyAPc />
      <DreamPC />
      <Parts />
      <MoreInfo />
      <Footer />
    </main>
  );
}


export default App;