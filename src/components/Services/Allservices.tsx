import "./Allservices.css";
import { services } from "../../data/Services";


export default function AllServices(){

return (

<section className="services-section">


<div className="services-header">

<h2>
Our Services
</h2>

<p>
Professional laundry and cleaning solutions delivered to your doorstep
</p>

</div>



<div className="services-grid">


{
services.map((service)=>(


<div 
className="service-card"
key={service.title}
>


<div className="image-box">

<img
src={service.image}
alt={service.title}
/>

</div>


<div className="service-content">


<h3>

<span>
{service.icon}
</span>

{service.title}

</h3>


<p>
{service.description}
</p>


<button
  onClick={() =>
    window.open(
      "https://app.thecleandry.com/website/W12334",
      "_blank"
    )
  }
>
  Book Now
</button>


</div>


</div>


))
}


</div>


</section>

)

}