import PlantCard from "./PlantCard";
import "./style.css";
import data from "../data"

function Plants(){
    const cardsArray=[];


    for(const [plantName,plantData] of Object.entries(data)){
        cardsArray.push((
            <PlantCard
                image={plantData["image"]}
                key={plantName}
                name={plantName}
            />
        ))
    }

    return (
        <section id="plant-cards-container">
            <strong>Plants</strong>
            <div id="plants-list">
                {cardsArray}
            </div>
        </section>
    )
}

export default Plants;