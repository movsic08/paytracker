import AuthenticatedLayout from './layout/AuthenticatedLayout';
import GuestLayout from './layout/GuestLayout';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Index Guest */}
        <Route
          path="/"
          element={
            <GuestLayout>
              <Login />
            </GuestLayout>
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={<Home />}
        />

      </Routes>
    </Router>
  );
}

export default App;
