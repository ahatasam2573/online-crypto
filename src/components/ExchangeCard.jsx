import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <a href={url} target={"blank"} >
            <VStack boxSize={"180px"} w={"52"} shadow={"xl"} p={"8"} borderRadius={"lg"} transition={"all 0.5s"}
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
                    {rank}
                </Heading>

                <Text noOfLines={1}>{name.substring(0, 8)}</Text>
            </VStack>
        </a >
    )
}

export default ExchangeCard;