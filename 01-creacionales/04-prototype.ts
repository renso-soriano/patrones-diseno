/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class Docuement{
    title: string;
    private content: string;
    author: string;
    
    constructor(title:string,content:string,author:string){
        this.title = title;
        this.content = content;
        this.author = author

    }

    clone():Docuement {
        return new Docuement(this.content,this.title,this.author)
    }

    displayInfo(){
        console.log(`
        Title:${this.title}
        Content:${this.content}
        author:${this.author}    
        `);
    }
}

function main(){
  const document1 = new Docuement('Cotización','500 dolares','fernando')
  console.log({document1})
  document1.displayInfo()

  
  const document2 = document1.clone()
  document2.title = 'Venta'

  console.log({document2})



}

main()