import React from 'react';
import Box from '@mui/material/Box';
import { errorContent, errorMessageStyle, verticalAlign } from './commonComponent.style';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Error = ({ errorMessage }) => {
    return (
        <Box style={errorContent}>
            <div style={errorMessageStyle}>
                <ErrorOutlineIcon style={verticalAlign} /> <span style={verticalAlign}>{errorMessage}</span>
            </div>
        </Box>
    );
}

export default Error;