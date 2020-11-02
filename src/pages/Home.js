import React from "react"

import colors from "../styles/colors"
import FavoritesCard from "../components/FavoritesCard"

export default function Home() {
    return (
        <div style={{backgroundColor:colors.white,margin:"auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colors.blue} fill-opacity="1" d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,138.7C840,160,960,224,1080,261.3C1200,299,1320,309,1380,314.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <FavoritesCard/>
        </div>
        
    )
}