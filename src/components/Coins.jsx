import { Button, Center, Container, HStack } from '@chakra-ui/react';
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

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    const btns = new Array(132).fill(1)

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

                        <HStack w={"full"} overflow={"auto"} p={"8"}>
                            {
                                btns.map((items, index) => (
                                    <Button
                                        bgColor={"blackAlpha.900"}
                                        color={"white"}
                                        onClick={() => changePage(index + 1)}>
                                        {index + 1}
                                    </Button>
                                ))
                            }
                        </HStack>

                    </>
                }
            </Container >
        )
    }
}

export default Coins;