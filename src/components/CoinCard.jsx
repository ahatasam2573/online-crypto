import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ id, name, price, img, symbol, currencySymbol = "৳" }) => {
    return (
        <Link to={`/coin/${id}`}>
            <VStack boxSize={"205px"} w={"52"} shadow={"xl"} p={"8"} borderRadius={"lg"} transition={"all 0.5s"}
                m={"4"}
                css={
                    {
                        "&:hover": {
                            transform: "scale (1.1)",
                        }
                    }
                }
            >
                <Image
                    src={img}
                    w={"10"}
                    h={"10"}
                    objectFit={"contain"}
                    alt={"Exchange"}
                />
                <Heading
                    size={"md"}
                    noOfLines={1}
                >
                    {symbol}
                </Heading>

                <Text noOfLines={1}>{name.substring(0, 8)}</Text>
                <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
            </VStack>
        </Link >
    )
}

export default CoinCard;