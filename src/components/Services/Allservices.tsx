import laundryImage from '../../assets/images/laundry.png';
import curtainImage from '../../assets/images/curtain.png';
import shoeImage from '../../assets/images/shoe_cleaning.png';
import carpetImage from '../../assets/images/carpet.png';
import dryCleaningImage from '../../assets/images/drycleaning.png';
import bagCleaningImage from '../../assets/images/bag.jpg';
import toyCleaningImage from '../../assets/images/toy.png';
import sofaCleaningImage from '../../assets/images/sofacleaning.jpg';

import "./Allservices.css";


const services = [

{
title:"Laundry",
icon:"🧺",
image:laundryImage,
description:"Fast wash and fold service with pickup and delivery."
},

{
title:"Carpet Cleaning",
icon:"🧹",
image:carpetImage,
description:"Deep carpet cleaning for fresh interiors."
},

{
title:"Curtain Cleaning",
icon:"🏠",
image:curtainImage,
description:"Professional curtain cleaning service."
},

{
title:"Shoe Cleaning",
icon:"👟",
image:shoeImage,
description:"Premium shoe cleaning and care."
},

{
title:"Dry Cleaning",
icon:"👔",
image:dryCleaningImage,
description:"Safe dry cleaning for your clothes."
},

{
title:"Bag Cleaning",
icon:"👜",
image:bagCleaningImage,
description:"Complete home cleaning solution."
},

{
title:"Soft Toys Cleaning",
icon:"🧸",
image:toyCleaningImage,
description:"Professional soft toys cleaning service."
},

{
title:"Sofa Cleaning",
icon:"🛋️",
image:sofaCleaningImage,
description:"Deep sofa cleaning service."
}

];


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
      "https://app.fabklean.com/",
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