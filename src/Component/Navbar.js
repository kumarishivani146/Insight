import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from'@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from'@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar,Button } from '@material-ui/core'
import "../CSS/Navbar.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'
import Modal from 'react-modal'
import { serverTimestamp } from "firebase/firestore";
import Select from 'react-select';
import { Link } from 'react-router-dom'
function Navbar() {

    const user=useSelector(selectUser)
    // const [selectedValue, setSelectedValue] = useState([]);
    const [openModel, setOpenModel]=useState(false);
    const [context,setContext]=useState("");
    const [contextUrl,setContextUrl]=useState("");
    const handleQuestion =(e)=>{
        e.preventDefault();
        if(!selectedValue.length){
            alert("Kindly Select the Related Field")
        }
        else if(context==""){
            alert("Kindly add the question yo have in your mind!!")
        }
        if(selectedValue&&context!="")
        {
            db.collection('questions').add({
                question:context,
                imageUrl:contextUrl,
                timestamp: serverTimestamp(),
                user: user,
                feild: selectedValue,
            });
            setContext("");
            setContextUrl("");
            setOpenModel(false);
        }
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right:'auto',
          bottom:'auto',
          width:'40%',
          height:'70%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };




    const data=[
        {value:1,label:'Internship'},
        {value:2,label:'Coding'},
        {value:3,label:'Development'},
        {value:4,label:'Science'},
        {value:5,label:'Mathematics'},
        {value:6,label:'Projects'},
        {value:7,label:'Photography'},
        {value:8,label:'Placement'},
        {value:9,label:'Startup'},
        {value:10,label:'Technology'},
        {value:11,label:'Innovation'}
    ];
    
    const [selectedValue, setSelectedValue] = useState([]);
    const handleSelectedChange = (e) => {
      setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);
    }


    return (
        <div className="Iheader">
            <div className="Iheader_icons">
                <div className="Iheader_search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Insight"></input>
                </div>
                <div className="Iheader_Rem">
                    <div className="Iheader_avatar">
                    <Avatar onClick={()=>auth.signOut()}src={user.photo}/>
                    <p class="text">My Profile</p>
                    </div>
                    <div className='lang_icon'>
                    <LanguageIcon/>
                    <p>Language</p></div>
                    <Button onClick={()=>setOpenModel(true)}>ADD Query</Button>
                    <Modal isOpen={openModel} onRequestClose={()=>setOpenModel(false)} style={customStyles}>
                        
                        <div className='modal_title'>
                            <h5>Add Question</h5>
                            <div className='modal_info'>
                                <div className='modal_user_info'>
                                <Avatar className='avatar'/><h5>{user.email}</h5>
                                </div>
                                <div className='modal_body' style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                                <Select
                                    className="dropdown"
                                    placeholder="Select Option"
                                    value={data.filter(obj => selectedValue.includes(obj.label))} // set selected values
                                    options={data} // set list of the data
                                    onChange={handleSelectedChange} // assign onChange function
                                    isMulti
                                />
                                <br/>
                                    {/* {console.log(selectedValue)} */}
                                    <input id="add_query" type="text" value={context} onChange={(e)=>setContext(e.target.value)} placeholder='Write your Query here'/>
                                    <input id="add_link" type="text" value={contextUrl} onChange={(e)=>setContextUrl(e.target.value)}placeholder='Any link you want to insert'/>
                                    {
                                        contextUrl!==""&&<img style={{height:"40vh",
                                        objectFit:"contain"}}src={contextUrl} alt="ContextImage" />
                                    }
                                    
                                    <input class="op_btn" style={{backgroundColor:"#4DBDEB"}} type="submit" onClick={handleQuestion}/>
                                    <input class="op_btn" style={{backgroundColor:"black",color:"white"}}type="button" value='cancel' onClick={()=>{setOpenModel(false)}}/>
                                    
                                </div>
                            </div>
                        </div>
                    </Modal> 
                    
                </div>
                <div className="Iheader_icon">
                    <HomeIcon/><Link to="/" style={{ textDecoration: 'none',}}><p>Home</p></Link>
                </div>
                <div className="Iheader_icon">
                    <FeaturedPlayListOutlinedIcon/><Link to="/questions" style={{ textDecoration: 'none',}}><p>Questions</p></Link>
                </div>
                <div className="Iheader_icon">
                    <AssignmentTurnedInOutlinedIcon/><p>Answered</p>
                </div>
                <div className="Iheader_icon">
                    <PeopleOutlinedIcon/><p>Spaces</p>
                </div>
                <div className="Iheader_icon">
                    <NotificationsOutlinedIcon/><p>Notification</p>
                </div>
                
            </div>
            

        </div>
    )
}

export default Navbar