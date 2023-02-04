import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

const Error = ({ message }) => {
    return (
        <Alert
            status={"error"}
            position={"fixed"}
            bottom={"4"}
            p={"0"}
        >
            <AlertIcon>
                {message}
            </AlertIcon>
        </Alert>
    )
}

export default Error