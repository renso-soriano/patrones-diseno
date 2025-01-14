import { COLORS } from './../helpers/colors.ts'
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburguer{
    prepare(): void;
}


class ChickerHamburguer implements Hamburguer{
  prepare(): void {
    console.log('Preparando una hamburguesa de pollo', COLORS.yellow)
  }

}

class BeefHamburguer implements Hamburguer{
    prepare(): void {
      console.log('Preparando una hamburguesa de res', COLORS.brown)
    }
  
}

class BeanHamburguer implements Hamburguer{
    prepare(): void {
      console.log('Preparando una hamburguesa de frijol', COLORS.red)
    }
  
}


abstract class Restaurant {

    protected  abstract createHamburguer():Hamburguer;

    orderHamburguer():void{
     const hamburger = this.createHamburguer();
     hamburger.prepare();
    }
}


class ChickenRestaurant extends Restaurant{

  override createHamburguer(): Hamburguer {
    return new ChickerHamburguer()
  }
    
}

class BeefRestaurant extends Restaurant{

    override createHamburguer(): Hamburguer {
      return new BeefHamburguer()
    }
      
}

class BeanRestaurant extends Restaurant{

    override createHamburguer(): Hamburguer {
      return new BeanHamburguer()
    }
      
}


function main(){
 let restaurant: Restaurant;

 const burgerType = prompt('QUE TIPO DE HAMBURGUESA QUIERES? (chicken/beef/bean)')
 
 switch(burgerType){
    case 'chicken':
    restaurant = new ChickenRestaurant();
    break;

    case 'beef':
    restaurant = new BeefRestaurant();
    break;

    case 'bean':
        restaurant = new BeanRestaurant();
        break;

    default:
    throw new Error('Opcion no valida')
 }

 restaurant.orderHamburguer()
}

main()