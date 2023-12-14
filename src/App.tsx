
import React from 'react';
import TopMenu from './TopMenu';
import Footer from './Footer';
import Products from './Products';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopMenu />
      <Products />

      <Footer />
   
    </div>
  );
};

export default App;
