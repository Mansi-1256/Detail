import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TextFieldHiddenLabel(props) {
    const [name, setName] = useState("");
    const [state, setStat] = useState("");
    const [age, setAge] = useState("");
    const [sweet, setSweet] = useState("");
    const [spicy, setSpicy] = useState("");
    const [salty, setSalty] = useState("");
    const [show, setShow] = useState(true);


    const submit = async (e) => {
        e.preventDefault();

        const body = { name, state, age, sweet, spicy, salty }
        const { data } = await axios.post('/detail', body)

        console.log(data);
        if (props.loader) {
            props.setLoader(0)
        }
        else {
            props.setLoader(1)
        }
    };



    return (
        <div>
            <Button variant="contained" color="secondary" onClick={() => setShow(!show)}>Show / Hide</Button>
            {show ?
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            height: "100%",
                            padding: "5%",
                        },
                    }}
                >
                    <Paper variant="outlined" elevation={3}>
                        <h2>Details</h2>

                        <Stack
                            component="form"
                            sx={{
                                width: "100 %",
                            }}
                            alignItems="center"
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

                            <Button onClick={submit} style={{ backgroundColor: "black", width: "80%", borderRadius: "15px 15px 15px 15px" }} type="submit" variant="contained" disableElevation>
                                Submit
                            </Button>


                        </Stack>
                    </Paper>
                </Box>
                : null}

        </div >
    );
}


export default TextFieldHiddenLabel;