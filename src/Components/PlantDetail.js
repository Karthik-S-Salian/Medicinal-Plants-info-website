import "./style.css"
import { useSearchParams,Link} from "react-router-dom";
import data from "../data.json"
import { useEffect } from "react";


function PlantDetail(){
    const [searchParams] = useSearchParams();
    const plantName=searchParams.get("plant")

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [searchParams]);

    const plantData=data[plantName];

    console.log(plantName,plantData)


    const benifitsArray=plantData["health_benefits"].map((ele,index)=>{
        return (
            <li><p key={index}>{ele}</p></li>
        );
    });


    return (
        <div className="plant-detail-page">
            <header>
                <h2>{plantName}</h2>
            </header>
            
            <section>
                <img src={require(`./../images/${plantData.image}`)} alt={plantName}/>
                <p>
                    {plantData.description}
                </p>
            </section>

            <section>
                <h3>Health Benifits</h3>
                <ol>
                    {benifitsArray}
                </ol>
            </section>
                
            <Link to="/">
                <section id="backButton">BACK TO HOME</section>
            </Link>  

        </div>
    );
}

export default PlantDetail;