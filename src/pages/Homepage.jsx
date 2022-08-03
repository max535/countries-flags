import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const Homepage = ({ countries, setCountries }) => {
    const [filterCountries, setFilterCountries] = useState(countries);

    let navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region));
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilterCountries(data);
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filterCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
};
