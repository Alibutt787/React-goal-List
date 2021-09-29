import React from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TableGoals = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Titles</th>
          <th>Actions</th>
       
        </tr>
      </thead>
      <tbody>
          {props.goals.map((value, ind) => {
            return (
              <tr key={ind}>
                <td style={{ border: "1px solid black" }}> {value.title}</td>
                <td style={{ border: "1px solid black" }}>
                  <Button color="warning"
                  onClick={() => {props.edit(value, ind);}} ><FontAwesomeIcon  icon={faEdit } size="lg" /> </Button>
                  <Button color="danger"
                    onClick={() => {props.del(ind); }}><FontAwesomeIcon  icon={faTrashAlt } size="lg" />  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
    </Table>
  );
}

export default TableGoals;