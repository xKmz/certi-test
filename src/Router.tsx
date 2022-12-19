import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages';
import { Pilots } from './pages/Pilots';
import { Starships } from './pages/Starships';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pilots" element={<Pilots />} />
                <Route path="/starships" element={<Starships />} />
            </Route>
        </Routes>
    )
}