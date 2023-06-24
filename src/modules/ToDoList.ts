export { ToDoList, defaultToDoList }

import { ToDoListItem } from "./ToDoListItem";
import { ToDoAlreadyInList } from "./exceptions/ToDoError"

class ToDoList {
    items: ToDoListItem[]

    constructor(items: ToDoListItem[]) {
        this.items = items
    }

    addToDo(toDo: ToDoListItem) {
        if(this.toDoExists(toDo)) {
            throw new ToDoAlreadyInList("The to do is already in the list. Change the name of it")
        }
        this.items.push(toDo)
    }

    removeToDo(toDoTitle: string) {
        if(!this.toDoExists(new ToDoListItem({ title: toDoTitle, description: "", isCompleted: false }))) {
            throw new ToDoAlreadyInList("The to do is already in the list. Change the name of it")
        }
        this.items = this.items.filter(item => item.title !== toDoTitle)
    }

    completeToDosCount(): number {
        return this.items.reduce((acc, v, i,) => (v.isCompleted ? 1 : 0) + acc, 0)
    }

    toDosCount(): number {
        return this.items.length
    }

    getCompletedToDos(): ToDoListItem[] {
        return this.items.filter(item => item.isCompleted)
    }

    getUncompletedToDos(): ToDoListItem[] {
        return this.items.filter(item => !item.isCompleted)
    }

    completeToDo(toDoTitle: string): void {
        console.log("completeToDo called");
        
        var foundIndex: number = this.items.findIndex(item => item.title === toDoTitle)
        if(foundIndex !== -1) {
            this.items[foundIndex].isCompleted = !this.items[foundIndex].isCompleted
        }
    }

    private toDoExists(toDo: ToDoListItem): boolean {
        return this.items.filter(item => item.title === toDo.title).length != 0
    }

}

function defaultToDoList(): ToDoList {
    const items: ToDoListItem[] = [
        new ToDoListItem({ title: "Learning VueJS", description: "You may learn about VueJS framework", isCompleted: false }),
        new ToDoListItem({ title: "Exercising with Asp.Net", description: "I may reexercise with Asp.Net framework", isCompleted: true })
    ]
    return new ToDoList(items)
}