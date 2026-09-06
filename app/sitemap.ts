import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

return [

{
url:"https://www.giordanobc.it",
priority:1
},

{
url:"https://www.giordanobc.it/about",
priority:0.9
},

{
url:"https://www.giordanobc.it/services",
priority:0.9
},

{
url:"https://www.giordanobc.it/portfolio",
priority:0.9
},

{
url:"https://www.giordanobc.it/prima-hub",
priority:0.9
},

{
url:"https://www.giordanobc.it/contact",
priority:0.8
}

]

}
