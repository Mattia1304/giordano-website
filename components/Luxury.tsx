import Image from "next/image";

export default function Luxury(){

return(

<section className="luxury">

<div>

<Image

src="/images/marble.jpg"

alt="Italian Marble"

width={900}

height={1100}

/>

</div>

<div>

<span className="section-subtitle">

MADE IN ITALY

</span>

<h2>

Exclusive Italian

Materials

</h2>

<p>

Through our partnership with
PRIMA HUB, located in JLT Cluster T,
we provide direct access to premium
Italian brands and luxury interior
materials.

</p>

<ul>

<li>Italian Marble</li>

<li>Luxury Porcelain</li>

<li>Parquet Flooring</li>

<li>Designer Bathrooms</li>

<li>Italian Kitchens</li>

<li>Lighting Solutions</li>

<li>Interior Doors</li>

<li>Bespoke Furniture</li>

</ul>

</div>

</section>

)

}
