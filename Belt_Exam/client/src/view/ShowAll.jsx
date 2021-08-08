import React,{useEffect,useState} from 'react';
import axios from 'axios';
import  {Link} from '@reach/router';
import Delete from '../componants/Forms/Delete';
import './Show.css';
const ShowAll = props => {
  const [User, setUser] = useState([]);
  const [project, setproject] = useState("");
  const [date, setDate] = useState()
  const [status] = useState({stat: 2});
  const [delet] = useState({stat: 3})
  let test = new Date()
  const [blocked, setBlocked] = useState([]);
  const [progress,setprogress] = useState([]);
  const [complete,setcomplete] = useState([]);
  const [rerender, setrerender] = useState(false)
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setUser(res.data);
                setLoaded(true);
                setrerender(false)
            });
    },[rerender])
    const refactor = () =>{
      setrerender(true)
    }
    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     onSubmitProp({project, status,due});
    //     console.log(status);
    // }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people/block/1')
            .then(res=>{
                setBlocked(res.data);
                setLoaded(true);
            });
    },[rerender])
// console.log(blocked);
useEffect(()=>{
    axios.get('http://localhost:8000/api/people/block/2')
        .then(res=>{
            setprogress(res.data);
            console.log(test);
            setLoaded(true);
        });
},[rerender])
//////////////////////////////////////////////////
useEffect(()=>{
    axios.get('http://localhost:8000/api/people/block/3')
        .then(res=>{
            setcomplete(res.data);
            console.log(res.data);
            setLoaded(true);
        });
},[rerender])
//////////////////////////////////////////////////////////
    const changeBlocked = (e,id) => {
      e.preventDefault();
      console.log(id);
      axios.put('http://localhost:8000/api/people/change/' + id,status)
          .then(res => console.log(res))
          .then(res => setrerender(true))
          .catch(err=>{
              const errorResponse = err.response.data.errors;
              const errorArr = [];
              for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
              }
          });
    }
//////////////////////////////////////////////////
const changeProgress = (e,id) => {
  e.preventDefault();
  console.log(id);
  axios.put('http://localhost:8000/api/people/change/delet/' + id,delet)
      .then(res => console.log(res))
      .then(res => setrerender(true))
      .catch(err=>{
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
              errorArr.push(errorResponse[key].message)
          }
      });
}

    return (
        <div style={{display: "flex", justifyContent:'space-between'}}>




            <div><h3>||Blocking||</h3>
            {blocked.map((User, idx)=>{
                return <div  style={{overflow: "scroll",width: "200px",height: "300px"}}  key={idx}>
                 {User.project}
                 {User.due}
                 <button style={{background: "red"}} onClick={e => changeBlocked(e,User._id,2)}>satr > </button>
                 </div>

            })}
            </div>
            <div><h3>||inprogress||</h3>
            {progress.map((pro,i)=>{
              return <div  style={{overflow: "scroll",width: "200px",height: "300px"}}  key={i}>
               {pro.project}
               {pro.due}
               <button style={{background: "green"}} onClick={e => changeProgress(e,pro._id,2)}>Move  > </button>
               </div>

            })}
            </div>
            <div><h3>||completed||</h3>
            {complete.map((com, i)=>{
              return  <div  style={{overflow: "scroll",width: "200px",height: "300px"}}  key={i}>
               {com.project}
               {com.due}
               <Delete id={com._id} rerender={()=>refactor()} />

               </div>
            })}
            </div>

        </div>
    );
};
//<Delete id={pro._id} rerender={()=>refactor()} />
export default ShowAll;
// <td><Link to = {'/show/'+User._id} style={{textDecoration: "none", color:"yellow"}} >{User.firstName}</Link></td>
