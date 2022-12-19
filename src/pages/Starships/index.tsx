import { useEffect, useState, useCallback } from "react";

import { api } from "../../lib/axios";

import { PageContainer, StarshipsTitle, StarshipsContainer, StarshipsCard } from './styles';

interface IStarships {
    name: string;
    model: string;
	manufacturer: string;
}

export function Starships() {
    const [starships, setStarships] = useState<IStarships[]>([]);

    const loadStarships = useCallback(async () => {
        try {
            const { data } = await api.get('/starships');
    
            console.log(data.results);

            setStarships(data.results);
        } catch (err) {
            console.log(err);
        }
    }, [Starships]);

    useEffect(() => {
        loadStarships();
    }, []);

    return (
        <PageContainer>
            <StarshipsTitle>Starships</StarshipsTitle>
            <StarshipsContainer>
                {starships.map(starship => {
                    return (
                        <StarshipsCard key={starship.name}>
                            <p>{`Name: ${starship.name}`}</p>
                            <p>{`Model: ${starship.model}`}</p>
                            <p>{`Manufacturer: ${starship.manufacturer}`}</p>
                        </StarshipsCard>
                    )
                })}
            </StarshipsContainer>
        </PageContainer>
    );
}