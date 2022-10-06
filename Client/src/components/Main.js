import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Form from './Form'
import Table from './Table'

const Main = () => {
    const [detail, setDetail] = useState("");

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/detail')

            setDetail(data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <Grid container style={{ padding: "5%" }}  >
                <Grid item lg={3} md={6} xs={12}  >
                    <h2>Details</h2>
                    <Form />
                </Grid>
                <Grid item lg={9} md={6} xs={12} >

                    <Table data={detail} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Main