import "./style.css"
import Header from "./Header"
import Plants from "./Plants";
import Footer from "./Footer"
import { useLocation} from "react-router-dom";
import { useEffect } from "react";

function Home(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return (
        <>
            <Header/>
            <section>
                <p>
                    Medicinal plants have been used for thousands of years to treat various ailments 
                    and diseases. These plants contain bioactive compounds that have therapeutic 
                    properties and can provide relief from pain, inflammation, infections, and other
                     health problems. The use of medicinal plants is a natural and sustainable 
                     alternative to conventional medicine, and it has gained popularity in recent 
                     years due to the growing awareness of the harmful side effects of synthetic drugs.
                      Additionally, medicinal plants can be easily grown at home, making them an 
                      accessible and affordable option for many people. However, it is important to 
                      note that while medicinal plants can be beneficial, they should not be used as 
                      a replacement for professional medical advice and treatment.
                </p>
            </section>
            <Plants/>

            <Footer/>
        </>
    )
}

export default Home;