import React,{useState} from 'react'
import "./Sidebar.css";
import Home from "../Home/Home";
import SidebarList from './SidebarList';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = ({theme, changeTheme}) => {

    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = ()=>{
        setExpandSidebar(!expandSidebar);
    }
  return (
    <div className='container-fluid sidebar-section'>
        {/* Initially */}
        {/* <div className={expandSidebar ? "sidebar-expandsidebar": " sidebar"} ></div> */}
        <div className={!expandSidebar ? "sidebar": "sidebar-expand sidebar"} >

            <div className='icon-for-sidebar-expand-and-collapse'>

                <p onClick={handleExpandClick}>

                    {expandSidebar? 
                    (<BsChevronLeft size={30} />
                    ):(
                        <BsChevronRight size={30}/>
                    )}
                    
        
                </p>

            </div>

            <SidebarList expandSidebar={expandSidebar}/>

        </div>

        <div className='container'>
            <Home changeTheme={changeTheme} theme={theme}/>

        </div>


    </div>
  )
}

export default Sidebar