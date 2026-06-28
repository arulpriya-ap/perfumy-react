import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"

//creating product component
function Products(){
  return(<div className="products">

        <div className="box">
        <img src={one}/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
         </div>
        <div className="box">
        <img src={two}/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
        </div>
        <div className="box">
        <img src={three}/>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>

  </div>
  )
}

export default Products