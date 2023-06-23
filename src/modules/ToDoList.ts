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