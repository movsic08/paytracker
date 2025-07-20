import { useState } from 'react';
import bgImage from './assets/img/bg.jpg'; // ✅ import the image
import Docker from './components/partials/Docker';

function App() {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ use imported path
      }}
    >
      <Docker />
    </div>
  );
}

export default App;
