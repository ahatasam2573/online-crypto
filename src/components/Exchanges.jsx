import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, HStack, TableContainer } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import Error from './Error';

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }
        fetchExchanges();
    }, [])

    if (error) return <Error message="Fetching showing errors" />

    else {
        return (
            <Container maxW={"container.xl"} m={7} p={5}>

                {
                    loading ? <Loader /> : <>
                        <HStack wrap={"wrap"} >
                            {
                                exchanges.map(i => (

                                    <ExchangeCard
                                        key={i.id}
                                        name={i.name}
                                        img={i.image}
                                        rank={i.trust_score_rank}
                                        url={i.url}
                                    />
                                ))
                            }
                        </HStack>

                    </>
                }
            </Container >
        )
    }
}

export default Exchanges