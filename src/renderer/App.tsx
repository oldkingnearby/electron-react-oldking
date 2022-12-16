import { HashRouter, Routes, Route } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      Default window.
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </HashRouter>
  );
}
