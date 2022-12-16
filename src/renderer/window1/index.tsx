import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      Hello window1.
    </div>
  );
};

export function Home() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </HashRouter>
    );
  }


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Home />);

