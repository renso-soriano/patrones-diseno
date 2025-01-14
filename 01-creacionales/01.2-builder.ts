/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import { COLORS } from '../helpers/colors.ts';

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solución


class Hamburguer{
  public lettuce:string = 'lettuce - not defined';
  public meat:string = 'meat - not defined';
  public sauces:string[] = ["ketsup"];
  public extra?:string[] = ["lo que sea"]


  cookedHamburguer(){
      console.log(`Hamburguesa del Cliente
          lettuce: ${this.lettuce}
          meat: ${this.meat}
          sauces: ${this.sauces}
          extra: ${this.extra}
      `)
  }


}




class HamburguerBuilder{
  public hamburger:Hamburguer

  constructor(){
    this.hamburger = new Hamburguer()
  }

  
 setmeat(meat:string):HamburguerBuilder{
  this.hamburger.meat = meat;
  return this;
}

setlettuce(lettuce:string):HamburguerBuilder{
  this.hamburger.lettuce = lettuce;
  return this;
}
setsauces(sauces:string):HamburguerBuilder{
  this.hamburger.sauces.push(sauces)
  return this;
}
setextra(extra:string):HamburguerBuilder{
  this.hamburger.extra?.push(extra)
  return this;
}

cook(){
  return this.hamburger
}

}


class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;
  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
   this.fields = fields
   return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions.push(condition)
    return this;
  }

  orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
    this.orderFields.push(field,direction)
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    const displayfields = this.fields.length > 0 ? this.fields : "*";
    const displayconditions = this.conditions.length > 0? 'where':""
    const displayorderFields = this.orderFields.length > 0 ? 'order by ' + this.orderFields.join(" ") : "";
    const displayLimit = this.limitCount? `limit ${this.limitCount}` : ""
    return `Select ${displayfields} from ${this.table} ${displayconditions} ${this.conditions.join(" and ")} ${displayorderFields} ${displayLimit}`;
  }
}

function main() {
  const usersQuery = new QueryBuilder('users')
    .select('id', 'name', 'email')
    .where('age > 18')
    .where("country = 'Cri'") // Esto debe de hacer una condición AND
    .orderBy('name', 'ASC')
    .limit(100)
    .execute();
  console.log(usersQuery);

  const hamburger:Hamburguer = new HamburguerBuilder()
  .setmeat('beef')
  .setlettuce('AVOCADO')
  .setextra('HUEVO FRITO')
  .setsauces('KETCHUP')
  .cook()

  console.log('%cHAMBURGUER DEL CLIENTE',COLORS.blue)
  hamburger.cookedHamburguer()

}

main();



