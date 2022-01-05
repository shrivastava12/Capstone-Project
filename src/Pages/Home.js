import React from 'react'
import Features from '../Components/Features/Features'
import Footer from '../Components/Footer'
import Info from '../Components/Information/info'

import '../App.css'
import KuchBhi from '../Components/KuchBhi'
function Home() {
    return (
        <>
        <Info/>
        <Features/>
        {/* <Info/> */}
        <KuchBhi/>
         <Footer/>
        </>
    )
}

export default Home
