import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import axios from 'axios'
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, age, state, spicy, sweet) {
    return { name, age, state, spicy, sweet };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables(props) {




    const arrayObj = props.data


    for (var i = 0; i < arrayObj.length; i++) {
        arrayObj[i].id = arrayObj[i]._id;
    }

    const remove = async (id) => {



        const { data } = await axios.delete(`/detail/${id}`)

        console.log(data);
        if (props.loader) {
            props.setLoader(0)
        }
        else {
            props.setLoader(1)
        }

    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">State&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Spicy&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Salty&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Sweet&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Remove&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!arrayObj ? "loading" : arrayObj.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.age}</StyledTableCell>
                            <StyledTableCell align="right">{row.state}</StyledTableCell>
                            <StyledTableCell align="right">{row.salty}</StyledTableCell>
                            <StyledTableCell align="right">{row.spicy}</StyledTableCell>
                            <StyledTableCell align="right">{row.sweet}</StyledTableCell>
                            <StyledTableCell align="right"> <Button onClick={() => { remove(row.id) }
                            } variant="contained">Delete</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
