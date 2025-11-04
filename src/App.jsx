import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceOfferings from './components/ServiceOfferings';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import CleanxReplica from './pages/CleanxReplica';

function App() {
  const [hash, setHash] = React.useState(() => window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isReplica = hash === '#replica';

  if (isReplica) {
    return (
      <div className="min-h-screen">
        <CleanxReplica />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceOfferings />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;