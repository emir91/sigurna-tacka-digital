import { Route, Routes } from 'react-router';
import AppLayout from './AppLayout';
import HomePage from './pages/HomePage/HomePage';
import ModulePage from './pages/ModulePage/ModulePage';
import ModulesPage from './pages/ModulesPage/ModulesPage';
import SupportPage from './pages/SupportPage/SupportPage';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="moduli" element={<ModulesPage />} />
        <Route path="moduli/:slug" element={<ModulePage />} />
        <Route path="podrska" element={<SupportPage />} />
      </Route>
    </Routes>
  );
};

export default App;


