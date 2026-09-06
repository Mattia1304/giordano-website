const testimonials = [

{
name:"Private Villa Owner",
text:"Giordano Building Contracting transformed our villa with exceptional Italian craftsmanship."
},

{
name:"Interior Designer",
text:"Reliable, professional and passionate. The quality exceeded expectations."
},

{
name:"Restaurant Owner",
text:"A seamless turnkey renovation delivered on time and with outstanding attention to detail."
}

]

export default function Testimonials(){

return(

<section className="testimonials">

<span className="section-subtitle">

TESTIMONIALS

</span>

<h2>

What Our Clients Say

</h2>

<div className="testimonialGrid">

{

testimonials.map((t,index)=>(

<div key={index} className="testimonialCard">

★★★★★

<p>

"{t.text}"

</p>

<h4>

{t.name}

</h4>

</div>

))

}

</div>

</section>

)

}
