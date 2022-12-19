import { useEffect, useState, useCallback } from "react";

import { api } from "../../lib/axios";

import { PageContainer, PilotsTitle, PilotsContainer, PilotsCard } from './styles';

interface IPilots {
    name: string;
    height: string;
	mass: string;
}

export function Pilots() {
    const [pilots, setPilots] = useState<IPilots[]>([]);

    const loadPilots = useCallback(async () => {
        try {
            const { data } = await api.get('/people');
    
            console.log(data.results);

            setPilots(data.results);
        } catch (err) {
            console.log(err);
        }
    }, [pilots]);

    useEffect(() => {
        loadPilots();
    }, []);

    return (
        <PageContainer>
            <PilotsTitle>Pilots</PilotsTitle>
            <PilotsContainer>
                {pilots.map(pilot => {
                    return (
                        <PilotsCard key={pilot.name}>
                            <div>{`Name: ${pilot.name}`}</div>
                            <div>{`Height: ${pilot.height}`}</div>
                            <div>{`Mass: ${pilot.mass}`}</div>
                        </PilotsCard>
                    )
                })}
            </PilotsContainer>
        </PageContainer>
    );
}