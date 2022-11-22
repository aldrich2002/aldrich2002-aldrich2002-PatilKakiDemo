import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Table,TableHead,TableRow,TableContainer,TableCell,TableBody } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  const [data, setData] = useState()
  const [pdata, setpdata] = useState()
  async function getData() {
    var countm = 0
    var countf = 0
    try {
      const res = await axios.get('https://gorest.co.in/public/v2/users')
      res.data.forEach(o => {
        if (o.gender == "male" && o.status == "active") {
          countm++
        } if (o.gender == "female" && o.status == "active") {
          countf++
        }
      });
      setpdata({ m: countm, f: countf })

      return res.data
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {

    getData()
      .then(res => {
        setData(res)
        console.warn(res)
      }
      ).catch(err => {
        console.log(err)
      });
  }, [])
if(data){
  return (
    <div className="App">
      <Container>
      <h1>ACTIVE MALE USERS {pdata.m} </h1>
      <h1>ACTIVE FEMALE USERS {pdata.f}</h1>

      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((o, index) => (
              <TableRow key={index}>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.name}</TableCell>
                <TableCell>{o.email}</TableCell>
                <TableCell>{o.gender}</TableCell>
                <TableCell>{o.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </div>
  );
}
else{
  <h1>loading</h1>
}
}

export default App;
