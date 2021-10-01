import React, { useState } from "react";
import styles from "./Header.module.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container ,Modal, ModalHeader, ModalBody, ModalFooter,Form,Row,Col,FormGroup,Label,Input} from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TableGoals from "./table";
import App1 from "./dynamicInput";
const Header = () => {
  // Initial goalList
  const titles = [];
  const [input, setinput] = useState("");
  const [goals, setsgoals] = useState(titles);
  const [goals1, setsgoals1] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //AddGoal
  const addTranssection = (e) => {
    e.preventDefault();
    var regex = /^[A-Za-z0-9 ]+$/;
    var inputTest=regex.test(input)
    if(inputTest){
    if (input !== "") {
      goals.push({ title: input });
      Toasty("Your Goal is Added");
    } } else if(inputTest===false && input !=="") { Toasty("Special Character are not Allowed")}
    setinput("");
  };
  //Delete Goal
  const del = (e) => {
    setsgoals(goals.filter((item, ind) => ind !== e));
    Toasty("Your Goal is Deleted Successfully");
  };
  //Edit Goal
  const edit = (e, p) => {
    setinput(e.title);
    setsgoals1(p);
    toggle();
    document.getElementById("pak").style.visibility = "visible";
    document.getElementById("pak1").style.display = "none";
  };
  //Update Goal
  const update = (e) => {
    e.preventDefault();
    if (input !== "") {
      goals[goals1].title = input;
      setsgoals([...goals]);
    }
    setinput("");
    document.getElementById("pak").style.visibility = "hidden";
    document.getElementById("pak1").style.display = "inline";
    Toasty("Your Goal is Update Successfully");
  };
  //Updatet-Delete
  const updatedelete = (e) => {
    e.preventDefault();
    document.getElementById("pak").style.visibility = "hidden";
    setinput("");
    document.getElementById("pak1").style.display = "inline";
    Toasty("Your Delete the Updated Goal");
  };
  //function Toast
  function Toasty(e) {
    toast.info(`${e}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <Container style={{ marginTop: "50px" }} className="themed-container">
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        Transition={Zoom}
      />
      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="text">Enter Goal</Label>
            <Input type="text" name="input" id="text"  value={input}
          onChange={(e) => setinput(e.target.value)}  />
          </FormGroup>
        </Col>
      </Row>
      <App1/>
        <Button
          id="pak1" color="primary"
          className={styles.addTranssection} 
          onClick={addTranssection}  >
        Save   
        </Button>
        <div id="pak" className={styles.update}>
          <Button
          color="warning"
          onClick={update}>
 <FontAwesomeIcon  icon={faEdit} size="lg" />
        </Button>
        <Button
         color="danger"
          onClick={updatedelete}
        >
 <FontAwesomeIcon  icon={faTrashAlt } size="lg" />
        </Button>
         
        </div>
      </Form>
      <br />
      <br />
      <br />
     <TableGoals  goals={goals} edit={edit} del={del} />
     <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </Container>
  );
};
export default Header;
