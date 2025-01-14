/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


class DragonBalls{

    private static instance: DragonBalls;
    private ballsCollected:number;

    private constructor(){
        this.ballsCollected = 0
    }

    public static getInstance():DragonBalls{
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls()
            console.log('%cLas pelotas del Dragon han sido creadas!', COLORS.green)
        }

        return DragonBalls.instance;
    }

    collectBall():void{
        if (this.ballsCollected < 7) {
            this.ballsCollected++
            console.log(`Esfera recolectada. Total de Esferas: ${this.ballsCollected}`);
            return;
        }
        console.log(`Ya se han recolectado las 7 esferas del Dragon, Invoca a Shenlong`);
    }

    summonShenlong():void{
        if (this.ballsCollected == 7) {
            console.log(`Sal de ahi, Shenlong: Pide tu Deseo`);
            this.ballsCollected = 0;
            return;
        }

        console.log(`Aun faltan ${7 - this.ballsCollected}`);

    }


}

function main() {
    
    const gokuDragonBalls = DragonBalls.getInstance()

    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();

    gokuDragonBalls.summonShenlong()

    const VegitaDragonBalls = DragonBalls.getInstance()

    VegitaDragonBalls.collectBall()
    VegitaDragonBalls.collectBall()
    VegitaDragonBalls.collectBall()
    VegitaDragonBalls.collectBall()

    gokuDragonBalls.summonShenlong()
    VegitaDragonBalls.summonShenlong()

}

main()