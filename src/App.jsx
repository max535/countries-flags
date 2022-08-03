import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Homepage } from './pages/Homepage';

export function App() {
    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        exact
                        path='/countries-flags/'
                        element={
                            <Homepage
                                countries={countries}
                                setCountries={setCountries}
                            />
                        }
                    />
                    <Route path='/country/:name' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}
