"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function MobileMenu() {

const [open,setOpen]=useState(false);

return(

<>

<button

className="mobileButton"

onClick={()=>setOpen(!open)}

>

{

open ? <FaTimes/> : <FaBars/>

}

</button>

<div className={open ? "mobileMenu active" : "mobileMenu"}>

<Link href="/" onClick={()=>setOpen(false)}>

Home

</Link>

<Link href="/about" onClick={()=>setOpen(false)}>

About

</Link>

<Link href="/services" onClick={()=>setOpen(false)}>

Services

</Link>

<Link href="/portfolio" onClick={()=>setOpen(false)}>

Projects

</Link>

<Link href="/prima-hub" onClick={()=>setOpen(false)}>

PRIMA HUB

</Link>

<Link href="/contact" onClick={()=>setOpen(false)}>

Contact

</Link>

<a

href="https://wa.me/971582369969"

className="mobileWhatsapp"

>

WhatsApp

</a>

</div>

</>

)

}
