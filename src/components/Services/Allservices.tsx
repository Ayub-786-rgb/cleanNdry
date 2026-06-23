import laundryImage from '../../assets/images/laundry.png';
import curtainImage from '../../assets/images/curtain.png';
import shoeImage from '../../assets/images/shoe_cleaning.png';
import carpetImage from '../../assets/images/carpet.png';
import dryCleaningImage from '../../assets/images/drycleaning.png';
import homeCleaningImage from '../../assets/images/homecleaning.jpg';
import corporateCleaningImage from '../../assets/images/office.jpg';
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
title:"Home Cleaning",
icon:"✨",
image:homeCleaningImage,
description:"Complete home cleaning solution."
},

{
title:"Corporate Cleaning",
icon:"🏢",
image:corporateCleaningImage,
description:"Office and commercial cleaning."
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


<button>
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