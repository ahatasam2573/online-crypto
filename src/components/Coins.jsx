import { Center, Container, HStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../index';
import CoinCard from './CoinCard';
import Error from './Error';
import ExchangeCard from './ExchangeCard';
import Loader from './Loader';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('bdt');

    const currencySymbol = currency === "bdt" ? "৳" : currency === "eur" ? "€" : "$";

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }
        fetchCoins();
    }, [currency, page])

    if (error) return <Error message="Showing problems for fetching coins" />

    else {
        return (
            <Container maxW={"container.xl"}>
                <Center w={"1080px"} ml={"90px"}>
                    {
                        loading ? <Loader /> : <>
                            <HStack wrap={"wrap"} >
                                {
                                    coins.map(i => (

                                        <CoinCard
                                            id={i.id}
                                            key={i.id}
                                            name={i.name}
                                            img={i.image}
                                            symbol={i.symbol}
                                            price={i.current_price}
                                            currencySymbol={i.currencySymbol}
                                        />
                                    ))
                                }
                            </HStack>

                        </>
                    }
                </Center>
            </Container >
        )
    }
}

export default Coins;