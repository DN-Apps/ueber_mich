import React from 'react'
import AdminContent from './adminContent/AdminContent.js'
import AdminSidebarLeft from './adminSidebarLeft/AdminSidebarLeft.js'
import './Adminpage.css'

function Adminpage() {
  return (
    <div>
        <h1>Das ist der Adminbereich</h1>
        <div className='App-adminsidebarleft'>
          <AdminSidebarLeft></AdminSidebarLeft>
        </div>
        <div className='App-admincontent'>
          <AdminContent></AdminContent>
        </div>
        
    </div>
  )
}

export default Adminpage
