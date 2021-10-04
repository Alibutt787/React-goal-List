import React, { useState } from "react";
import styles from "./Header.module.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
  const [inputList, setInputList] = useState([{ firstName: "" }]);
  const [iinputList, ssetInputList] = useState([{ firstName: "" }]);
  const [input1, setinput1] = useState("");

  //AddGoal
  const addTranssection = (e) => {
    e.preventDefault();
    var regex = /^[A-Za-z0-9 ]+$/;
    var inputTest = regex.test(input);
    if (inputTest) {
      if (input !== "") {
        goals.push({ title: input, Name: inputList });

        Toasty("Your Goal is Added");
      }
    } else if (inputTest === false && input !== "") {
      Toasty("Special Character are not Allowed");
    }
    setinput("");
    setInputList([{ firstName: "" }]);
  };
  //Delete Goal
  const del = (e) => {
    setsgoals(goals.filter((item, ind) => ind !== e));
    Toasty("Your Goal is Deleted Successfully");
  };
  //Edit Goal
  const edit = (e, p) => {
    setinput1(goals[p].title)
    ssetInputList(goals[p].Name);
    console.log(iinputList);
    setsgoals1(p);
    toggle();
  };
  //Update Goal
  const update = (e) => {
    e.preventDefault();
    goals[goals1].Name = iinputList;
      goals[goals1].title = input1;
    setinput("");
    toggle(); setsgoals([...goals]);
    setInputList([{ firstName: "" }]);
    Toasty("Your Goal is Update Successfully");
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
              <Input
                type="text"
                name="input"
                id="text"
                value={input}
                onChange={(e) => setinput(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <App1 setInputList={setInputList} inputList={inputList} />

        <Button
          id="pak1"
          color="primary"
          className={styles.addTranssection}
          onClick={addTranssection}
        >
          Save
        </Button>
      </Form>
      <br />
      <br />
      <br />
      <TableGoals goals={goals} edit={edit} del={del} inputList={inputList} />
      <div>
      <Button color="danger" onClick={toggle}>pak</Button>
        <Modal     isOpen={modal} toggle={toggle}  modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
     >
          <ModalHeader  toggle={toggle}>
            Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="text">Enter Goal</Label>
                    <Input
                      type="text"
                      name="input"
                      id="text"
                      value={input1}
                      onChange={(e) => setinput1(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <App1 setInputList={ssetInputList} inputList={iinputList} />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={update }>
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Button>
            <Button color="danger" onClick={toggle}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  );
};
export default Header;
