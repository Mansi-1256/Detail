import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Form from './Form'

const columns = [
    ,
    { field: '_id', headerName: 'Sr No', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
    },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'salty', headerName: 'Salty', width: 130 },
    { field: 'spicy', headerName: 'Spicy', width: 130 },
    { field: 'sweet', headerName: 'Sweet', width: 130 },
    { field: 'match', headerName: '% Match', width: 130 },


];

const rows = [
    { _id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { _id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { _id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { _id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { _id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { _id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { _id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { _id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { _id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable(props) {

    const arrayObj = props.data
    // console.log("hgvhghg", props.data);
    for (var i = 0; i < arrayObj.length; i++) {
        arrayObj[i].id = arrayObj[i]._id;

    }
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={arrayObj}

                columns={columns}
                pageSize={5}
            // rowsPerPageOptions={[5]}

            />
        </div>

    );
}
