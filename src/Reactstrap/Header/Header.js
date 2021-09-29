import React, { useState } from "react";
import styles from "./Header.module.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container } from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TableGoals from "./table";
const Header = () => {
  // Initial goalList
  const titles = [];
  const [input, setinput] = useState("");
  const [goals, setsgoals] = useState(titles);
  const [goals1, setsgoals1] = useState([]);
  //AddGoal
  const addTranssection = (e) => {
    e.preventDefault();
    if (input !== "") {
      goals.push({ title: input });
      Toasty("Your Goal is Added");
    }
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
      position: "top-center",
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
      <form>
        <input className={styles.input}
          name="firstName"
          placeholder="Your Title"
          value={input}
          onChange={(e) => setinput(e.target.value)} />
           

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
      </form>
      <br />
      <br />
      <br />
     <TableGoals  goals={goals} edit={edit} del={del} />
    </Container>
  );
};
export default Header;
