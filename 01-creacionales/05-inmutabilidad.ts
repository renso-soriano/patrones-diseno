/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";


class CodeEditorState{
    readonly content: string
    readonly cursorPosition: number
    readonly unsaveChanges: boolean

    constructor(content:string, cursorPosition:number, unsavedChanges:boolean){
        this.content = content
        this.cursorPosition = cursorPosition
        this.unsaveChanges = unsavedChanges 
    }


        displayState(){
            console.log(`\n%cEstado del editor`,COLORS.green)
            console.log(`
                Contenido: ${this.content}
                Cursor Pos: ${this.cursorPosition}
                Unsave Changes: ${this.unsaveChanges}
                `)
        }

        copyWith({
            content,
            cursorPosition,
            unsaveChanges
        }: Partial<CodeEditorState>):CodeEditorState{
          return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsaveChanges ?? this.unsaveChanges,
          )
        }

}

class codeEditorHistory{

    private history:CodeEditorState[] = []
    private currentIndex:number = -1

    save(state:CodeEditorState):void{

        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.splice(0, this.currentIndex + 1)
        }
        this.history.push(state)
        this.currentIndex++
    }

    redo():CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++
            return this.history[this.currentIndex]
        }
        return null
    }

    undo():CodeEditorState | null {
        if (this.currentIndex < 0) {
            this.currentIndex--
            return this.history[this.currentIndex]
        }
        return null
    }


}

function main(){

    const history = new codeEditorHistory();
    let editorState = new CodeEditorState(
        "console.logo",
        2,
        false
    )
    history.save(editorState)

    console.log(`%cEstado Inicial`,COLORS.blue)
    editorState.displayState();

    editorState = editorState.copyWith({
        content:"clg('Hola Mundo'); \n nueva linea",
        cursorPosition:3,
        unsaveChanges:true
    })
    console.log(`%cDespues del primer cambio`,COLORS.blue)
    history.save(editorState)
    editorState.displayState();

    console.log(`%cDespues de mover el cursor `,COLORS.blue)
    editorState = editorState.copyWith({cursorPosition:10})
    history.save(editorState);
    editorState.displayState();

    console.log(`%cDespues del Undo `,COLORS.blue)
    editorState = history.undo()!
    editorState.displayState();

    console.log(`%cDespues del Undo `,COLORS.blue)
    editorState = history.redo()!
    editorState.displayState();

}

main()
