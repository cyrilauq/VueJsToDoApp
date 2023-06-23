export { ToDoListItem }

class ToDoListItem {
    title: string
    description: string
    isCompleted: boolean

    constructor(object: { title: string, description: string, isCompleted: boolean }) {
        this.title = object.title
        this.description = object.description
        this.isCompleted = object.isCompleted
    }

}