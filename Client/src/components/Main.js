import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Form from './Form'
import Table from './Table'
import { isMobile } from "react-device-detect";
import './main.css'
import { ClassNames } from '@emotion/react';

const Main = () => {
    const [detail, setDetail] = useState("");
    const [loader, setLoader] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/detail')

            setDetail(data);
        }
        fetchData();
    }, [loader]);
    return (
        < div className={isMobile ? 'bgm ' : 'bg'} >

            <Grid container style={{ padding: "5%" }}  >
                <Grid item lg={3} md={6} xs={12}  >

                    <Form loader={loader} setLoader={setLoader} />
                </Grid>
                <Grid item lg={9} md={6} xs={12} >

                    <Table data={detail} loader={loader} setLoader={setLoader} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Main