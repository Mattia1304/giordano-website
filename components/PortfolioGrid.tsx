import Image from "next/image";
import Link from "next/link";

const projects = [

{
slug:"palm-jumeirah-villa",
title:"Palm Jumeirah Villa",
location:"Palm Jumeirah",
image:"/projects/palm.jpg"
},

{
slug:"emirates-hills",
title:"Emirates Hills Villa",
location:"Emirates Hills",
image:"/projects/hills.jpg"
},

{
slug:"downtown-penthouse",
title:"Downtown Penthouse",
location:"Downtown Dubai",
image:"/projects/penthouse.jpg"
},

{
slug:"difc-office",
title:"Luxury Office",
location:"DIFC",
image:"/projects/office.jpg"
},

{
slug:"restaurant",
title:"Fine Dining Restaurant",
location:"Dubai Marina",
image:"/projects/restaurant.jpg"
},

{
slug:"villa-modern",
title:"Modern Villa",
location:"Dubai Hills",
image:"/projects/villa2.jpg"
}

]

export default function PortfolioGrid(){

return(

<section className="portfolioGrid">

{

projects.map(project=>(

<Link

href={`/portfolio/${project.slug}`}

className="portfolioItem"

key={project.slug}

>

<div className="imageWrapper">

<Image

src={project.image}

fill

alt={project.title}

className="object-cover"

/>

</div>

<div className="portfolioInfo">

<p>{project.location}</p>

<h3>{project.title}</h3>

</div>

</Link>

))

}

</section>

)

}
