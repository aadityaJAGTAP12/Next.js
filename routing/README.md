NEXT.JS
here are the key take away from this folder . 

basics
1. git clone https
2. cd directory
3. git stauts
4. git add .
5. git commit -m ""
6. git push 
7. now we get Next.js in our folder by using => npx create-next-app@latest
8. things get rendered which are written in app/page.tsx
9. you have to delete cache when there is no error in code still things are not rendering

    PACKAGE.JSON
   
"scripts": {
    "dev": "next dev", => to run the program
    "build": "next build",    => to put in groduction 
    "start": "next start",      =>to start in production 
    "lint": "eslint"            => to know if there is any error in program
  }, 

  IMG IN NEXT.JS
  1. get your image in pub;ic folder
2. create img.tsx file in components
3. in this in this import your image from public by giving it a new name , like import newname from "public/img.png"; 
4. then also import Image from "next/image";
5. then create a function of some other name , we will call this function in other tsx file like page.tsx once it is exported from img.tsx . 
6. in function write <Image src={newname} />
7. then go to page.tsx import the function from img.tsx
8. write export default function home(){...... <functionname/> }

   LINKS in next.js
   so 1st we made a folder components , then we made header.tsx in it . in this we created a function lets say abcd . now this abcd function is imported in layout.tsx as import abcd from "@componenets/header"; and then write </abcd> before {children} . now at 1st as lauout gets seen at the browser , it will be header.tsx that will render .. 
