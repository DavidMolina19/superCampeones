import { Component } from '@angular/core';

import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  //atributos=variables

   nombre:string="david"
   edad:number=33

   numeros:any[]=[1,2,3,4,5,6,7,8,90]

  //  personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja1.jpg?alt=media&token=928601e2-a214-4974-a089-6a5d053d8d0f","https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja2.jpg?alt=media&token=cfafdacd-06d4-4f25-ac29-4f24665fa72e","https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja3.jpg?alt=media&token=899b5816-9a1b-49ba-879a-d94077e419ce","https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja4.webp?alt=media&token=5b1c101e-153a-4c3d-9a9c-9820c1aaa0fd","https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja5.webp?alt=media&token=3060cffa-841d-4b8d-a4dc-25cb2c23e4ed"]
 

  personajes:Personaje[]=[
    {"nombre":"bob","edad":45,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja1.jpg?alt=media&token=928601e2-a214-4974-a089-6a5d053d8d0f"},

    {"nombre":"esponja","edad":4,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja2.jpg?alt=media&token=cfafdacd-06d4-4f25-ac29-4f24665fa72e"},

    {"nombre":"patricio","edad":5,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja3.jpg?alt=media&token=899b5816-9a1b-49ba-879a-d94077e419ce"},

    {"nombre":"calamardo","edad":45,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja4.webp?alt=media&token=5b1c101e-153a-4c3d-9a9c-9820c1aaa0fd"},

    {"nombre":"benji","edad":45,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/esponja5.webp?alt=media&token=3060cffa-841d-4b8d-a4dc-25cb2c23e4ed"},
  ]

  constructor() { }



}
