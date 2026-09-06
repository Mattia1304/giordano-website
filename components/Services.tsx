import Image from "next/image";

const services = [

{
title:"Luxury Villas",
image:"/images/services/villa.jpg"
},

{
title:"Apartments",
image:"/images/services/apartment.jpg"
},

{
title:"Restaurants",
image:"/images/services/restaurant.jpg"
},

{
title:"Hotels",
image:"/images/services/hotel.jpg"
},

{
title:"Retail",
image:"/images/services/retail.jpg"
},

{
title:"Offices",
image:"/images/services/office.jpg"
}

]

export default function Services(){

return(

<section className="services">

<span className="section-subtitle">

OUR EXPERTISE

</span>

<h2>

Luxury Spaces

Built With Italian Excellence

</h2>

<div className="services-grid">

{

services.map((service,index)=>(

<div

className="service-card"

key={index}

>

<Image

src={service.image}

alt={service.title}

width={700}

height={900}

/>

<div className="service-overlay"/>

<h3>

{service.title}

</h3>

</div>

))

}

</div>

</section>

)

}
