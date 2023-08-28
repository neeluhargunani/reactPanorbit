import React, {useState, useEffect, useContext} from 'react'
import SideBarLeft from '../Components/SideBarLeft'
import style  from "../Styles/commingSoon.module.css"
import NavBarTop from '../Components/NavBarTop'
import { UserContext } from '../Components/Userprovider'; // Make sure the path to UserProvider is correct
export default function Post() {

  const allUsers = useContext(UserContext);
  return (
    <div className={style.main}>
        <SideBarLeft/>
       
        <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Posts</h2>
          <NavBarTop />
        </div>

       

        {/* ---------- Screen ------- */}
        <div className={style.screen}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  )
}
