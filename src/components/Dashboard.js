import React, {useState} from 'react'
import {Helmet} from "react-helmet";
import DashNav from './DashNav';
import Dashbody from './Dashbody';
import { useSelector} from 'react-redux'
import NotLoggedIn from './NotLoggedIn';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const darkmode = useSelector(state => state.modeSwitch.darkmode)
    const [year2, setYear2] = useState(false)
    const [year3, setYear3] = useState(false)


    return (
          
        <>
            <Helmet>
                <title>Dashboard | Revise Learning Platform</title>
            </Helmet>
            {localStorage.getItem("token") ?  <main className={darkmode ? "w-full min-h-screen bg-gray-800 flex" : "w-full min-h-screen bg-gray-100 flex"}>
                <DashNav handleOpen={handleOpen}/>
                <Dashbody  
                open={open} 
                handleOpen={handleOpen} 
                handleClose={handleClose} 
                year2={year2}  
                setYear2={setYear2}
                year3={year3}
                setYear3={setYear3}
                />               
            </main> : (
                <NotLoggedIn/>
            )}
           
        </>
    )
}

export default Dashboard
