import React from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DashCourses from './DashCourses';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../redux/darkmode'
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    outline: "none",
    p: 4,
  };

const Dashbody = ({ open, handleOpen, handleClose, year2, year3, setYear2, setYear3}) => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const darkmode = useSelector(state => state.modeSwitch.darkmode)
    const toggleMode = () => dispatch(changeMode())
    const year2clicked = () => {
        setYear2(true)
        handleClose()
    } 
    const year3clicked = () => {
        setYear3(true)
        handleClose()
    } 

    const signOut = () =>  {
        localStorage.clear()
        navigate("/")
    }

    return (

        <div className="dashboard w-5/6 h-full px-7 py-3">
                    <div className="h-16 flex justify-between items-center">
                        <h2 className={darkmode ? "profile__name text-xl text-gray-200": "profile__name text-xl"}>Hi {localStorage.getItem("id")},</h2>
                        <Avatar src={localStorage.getItem("purl")} className="profile__avatar mr-4"/>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"

                            >
                            <Box sx={style} className="modal">
                                <h3 className="text-blue-500 text-xl text-center mb-3">Pick your level</h3>
                                <button className="m-3 bg-gray-100 py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100" onClick={year2clicked}>200</button>
                                <button className="m-3 bg-gray-100 py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100"  onClick={year3clicked}>300</button>
                            </Box>
                        </Modal>

                        <div className="dashboard__icon flex items-center justify-between">
                            <Avatar src={localStorage.getItem("purl")} className="mr-4"/>

                            <img src="https://img.icons8.com/ios/50/000000/developer--v1.png" alt="Developer" className="h-8 mr-4 cursor-pointer"/>

                            <IconButton onClick={toggleMode}>
                                {darkmode ? <Brightness1Icon className="text-gray-300"/> : <Brightness2Icon />}
                            </IconButton>
                        </div>

                        <div className="dashboard__mdicon flex items-center justify-between">

                            <IconButton onClick={toggleMode}>
                                {darkmode ? <Brightness1Icon className="text-gray-300"/> : <Brightness2Icon />}
                            </IconButton>

                            <IconButton onClick={signOut}>
                                <LogoutIcon  fontSize="medium" className={darkmode && "text-gray-300"}/>
                            </IconButton>
                        </div>
                    </div>
                    
                    <DashCourses 
                    handleOpen={handleOpen} 
                    darkmode={darkmode} 
                    year3={year3} 
                    year2={year2}/>
                    
                </div>
    )
}

export default Dashbody
