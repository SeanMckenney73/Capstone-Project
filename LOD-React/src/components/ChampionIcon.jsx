import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


function ChampionIcon({
    champion = `${champion}`, patch = "latest", championName
}){
    const imageUrl = `https://cdn.communitydragon.org/${patch}/champion/${champion}/square`
    

    const displayName = championName ? championName : champion


    return(
        <div className="ChampionIcon">
                <img   
                src={imageUrl} 
                alt={`${champion} square icon`}
                width={80}
                height={80}/>
                <h2><Link to={`/${displayName}`} style={{textDecoration: 'none', color: 'inherit'}}>{displayName}</Link></h2>
        </div>
        
    )
}

export default ChampionIcon