import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TextFieldHiddenLabel() {
    const [form, setForm] = useState("");
    const [name, setName] = useState("");
    const [state, setStat] = useState("");
    const [age, setAge] = useState("");
    const [sweet, setSweet] = useState("");
    const [spicy, setSpicy] = useState("");
    const [salty, setSalty] = useState("");



    const submit = async (e) => {
        e.preventDefault();

        const body = { name, state, age, sweet, spicy, salty }
        const { data } = await axios.post('http://localhost:5000/detail', body)
        console.log(data);
    };




    return (
        <div>


            <Stack
                component="form"
                sx={{
                    width: '30ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >


                <TextField
                    id="outlined-search" label="Name"

                    value={name}

                    onChange={(e) => { setName(e.target.value) }}

                />
                <TextField
                    label="Age"
                    id="outlined-search"
                    value={age}
                    onChange={(e) => { setAge(e.target.value) }}
                />
                <TextField
                    label="State"
                    id="outlined-search"
                    value={state}
                    onChange={(e) => { setStat(e.target.value) }}
                />
                <TextField
                    label="Salty Count"
                    id="outlined-search"
                    value={salty}
                    onChange={(e) => { setSalty(e.target.value) }}

                />
                <TextField
                    label="Spicy Count"
                    id="outlined-search"
                    value={spicy}
                    onChange={(e) => { setSpicy(e.target.value) }}
                />
                <TextField
                    label="Sweet Count"
                    id="outlined-search"
                    value={sweet}
                    onChange={(e) => { setSweet(e.target.value) }}
                />

                <Button onClick={submit} type="submit" variant="contained" disableElevation>
                    Submit
                </Button>
            </Stack>

        </div >
    );
}


export default TextFieldHiddenLabel;