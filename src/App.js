import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root : {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customer = [
  {
    'id':1,
    'imagae': 'https://palceimg.com/64/64/1',
    'name': 'lee',
    'birthday' : '111111',
    'gender' : 'male',
    'job' : 'student'
  },
  {
    'id':2,
    'imagae': 'https://palceimg.com/64/64/2',
    'name': 'kim',
    'birthday' : '222222',
    'gender' : 'male',
    'job' : 'student'
    },
  {
    'id':3,
    'imagae': 'https://palceimg.com/64/64/3',
    'name': 'park',
    'birthday' : '333333',
    'gender' : 'male',
    'job' : 'student'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
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
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.birthday}
                job={c.job}
              />
            )
          })}
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
