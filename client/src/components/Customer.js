import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Customer({id,image,name,birthday,gender,job}){
    return(
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt="profile"/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
        </TableRow>
       
    )
}
function CustomerProfile ({image,name,id}){
    return(
        <div>
            <img src={image} alt='profile'/>
            <h2>{name}({id})</h2>
        </div>
    )
}


function CustomerInfo({birthday,gender,job}){
    return(
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    )
}
export default Customer;