import React from 'react'
import Header from '../../layout/Header/Header'
import SidebarLeft from '../../layout/SidebarLeft/SidebarLeft'
import SidebarRight from '../../layout/SidebarRight/SidebarRight'
import Content from '../../layout/Content/Content'
import Footer from '../../layout/Footer/Footer'

function Home() {
  return (
    <div>
        <div className="App">
        <header className="App-header">
          <Header></Header> 
        </header>
        <div className='App-sidebarleft'>
          <SidebarLeft></SidebarLeft>
        </div>
        <div className='App-content'>
          <Content></Content>
        </div>
        <div className='App-sidebarright'>
          <SidebarRight></SidebarRight>
        </div>
        <div className='App-footer'>
          <Footer></Footer>
        </div>
      </div>
      
    </div>
  )
}

export default Home
