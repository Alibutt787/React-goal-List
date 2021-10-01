import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button,Form,FormGroup,Row,Col,Input} from 'reactstrap';

function App1() {
  const [inputList, setInputList] = useState([{ firstName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "" }]);
  };
 
  return (
    <div  >
     <span >Goal List</span>
      {inputList.map((x, i) => {
        return (
           <Form>
            <Row form>
        <Col md={6}>
          <FormGroup  >
            <Input type="text"  placeholder=""     name="firstName"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)} />
         </FormGroup>
         </Col>
         <Col  className="ml-2 ">
         {inputList.length - 1 === i && <Button color='success' className="mr-2 " onClick={handleAddClick}>
 <FontAwesomeIcon  icon={faPlus} size="lg" /></Button> } 
              {inputList.length !== 1 && <Button  color='danger'
                onClick={() => handleRemoveClick(i)}> <FontAwesomeIcon  icon={faTrashAlt} size="lg" /></Button>}
        
            </Col>
            </Row>
            </Form>
         
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}
 
export default App1;