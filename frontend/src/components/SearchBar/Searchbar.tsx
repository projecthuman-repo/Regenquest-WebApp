import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

interface Props {
    searchTerm?: any;
    setSearchTerm?: any;
    // any props that come into the component
}
const BoxContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
});

const Searchbar = ({ searchTerm, setSearchTerm }: Props) => {
    const genres = [];
    const navigate = useNavigate();

    return (
        <BoxContainer>
            <input
                style={{
                    width: 300,
                    height: 45,
                    borderRadius: 30,
                    border: '1px solid',
                }}
                type='text'
                onChange={(e: { target: { value: any } }) => {
                    setSearchTerm(e.target.value);
                }}
                placeholder='&#x1F50D;  Search topics'
                value={searchTerm}
                // onFocus will navigate to /search
                // onFocus={() => navigate('/search')}
            />
        </BoxContainer>
    );
};

export default Searchbar;
