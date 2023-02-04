import { Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <a href='url' target={"blank"} >
            <VStack>
                <Image
                    src={img}
                    w={"10"}
                    h={"10"}
                    objectFit={"contain"}
                    alt={"Exchange"}
                />
                <Heading
                    size={"md"}
                    noOfLines={"1"}

                >
                    {rank}
                </Heading>
            </VStack>
        </a >
    )
}

export default ExchangeCard;