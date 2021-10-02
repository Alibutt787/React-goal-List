import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button,FormGroup,Row,Col,Input} from 'reactstrap';

function App1(props) {
  // const [inputList, setInputList] = useState([{ firstName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...props.inputList];
    list[index][name] = value;
   props.setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...props.inputList];
    list.splice(index, 1);
    props.setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    props.setInputList([...props.inputList, { firstName: "" }]);
  };
 
  return (
    <div  >
     <span >Goal List</span>  <div  > 
      { props.inputList.map((x, i) => {
        return (
       
            <Row form  key={i}>
        <Col md={6}>
          <FormGroup  >
            <Input type="text"  placeholder=""     name="firstName"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)} />
         </FormGroup>
         </Col>
         <Col  className="ml-2 ">
         { props.inputList.length - 1 === i && <Button color='success' className="mr-2 " onClick={handleAddClick}>
 <FontAwesomeIcon  icon={faPlus} size="lg" /></Button> } 
              { props.inputList.length !== 1 && <Button  color='danger'
                onClick={() => handleRemoveClick(i)}> <FontAwesomeIcon  icon={faTrashAlt} size="lg" /></Button>}
        
            </Col>
            </Row>
          
         
        );
      })}
      </div>
    </div>
  );
}
 
export default App1;