import './App.css';
import React, { useState, useEffect } from 'react';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '24px',
    overflowX: 'auto'

  },
  table: {
    minWidth: '1080px'
  },
});



function App({ classes }) {

  const [customers, setCustomers] = useState([]);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    console.log('응답 :', response);
    const body = await response.json();
    return body;
  }
  useEffect(() => {
    console.log('useEffect시작'); 
    callApi()
      .then(res => {
        console.log('api받음',res);
        setCustomers(res);
      })
      .catch(err => console.log('에러입니다',err));
  }, []);
  


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
