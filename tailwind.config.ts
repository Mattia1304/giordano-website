import type { Config } from "tailwindcss";

const config: Config = {

content:[

"./app/**/*.{js,ts,jsx,tsx}",

"./components/**/*.{js,ts,jsx,tsx}"

],

theme:{

extend:{

colors:{

gold:"#B89A63",

dark:"#171717",

cream:"#F8F7F2"

},

fontFamily:{

title:["Cormorant Garamond"],

body:["Montserrat"]

}

}

},

plugins:[]

}

export default config
