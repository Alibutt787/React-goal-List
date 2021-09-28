import React,{useState} from 'react';
import styles from './Header.module.css'; 
const Header = () => {
  // Initial goalList
const titles = [ ];
const [input, setinput] = useState('');
const [goals, setsgoals] = useState(titles);
const [goals1, setsgoals1] = useState([]);
//AddGoal
const addTranssection = e=>{
e.preventDefault();
if(input!==''){
goals.push({title:input})
}setinput('');  }
//Delete Goal
const del=(e)=>{
setsgoals(goals.filter((item,ind) => ind !== e));
  }
  //Edit Goal
  const edit=(e,p)=>{
    setinput(e.title)
    setsgoals1(p);
   const pp= document.getElementById('pak').style.visibility="visible"
   document.getElementById('pak1').style.display="none"
    console.log(pp);
      }
      //Update Goal
      const update=e=>{
        e.preventDefault();
        if(input!==''){
          goals[goals1].title=input;
        setsgoals([...goals])}
        setinput('');
        document.getElementById('pak').style.visibility="hidden" 
        document.getElementById('pak1').style.display="inline" }
  return (
    <div style={{marginTop:'50px'}}>
    <form >
         <input name="firstName" placeholder="Your Title" value={input}   onChange={(e) => setinput(e.target.value)} />
            <button  id='pak1' className={styles.addTranssection} onClick={addTranssection} >add transsection</button>
            <button id='pak' className={styles.update} onClick={update} >Update</button>
            </form>   
       <br/>  
       <br/>  
       <br/>  
  <table style={{
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid black'
}}>
 <thead>
   <tr>
     <th style={{ border: '1px solid black'}}>Title</th>
     <th style={{ border: '1px solid black'}}>Action</th>
     </tr>
 </thead>
 <tbody > 
 {goals.map((value, ind) => {
          return (
            <tr key={ind}>
             <td style={{ border: '1px solid black'}}>  {value.title}</td>
             <td style={{ border: '1px solid black'}}> 
             <button onClick={()=>{edit(value,ind)}}>Edit</button>
             <button onClick={()=>{del(ind)}}>Delete</button>
             </td>
            </tr>
          )
        })}
 </tbody>
 <tfoot></tfoot>
</table>
 </div>
  );
  
};
export default Header;