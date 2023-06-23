export { ToDoListItem }

const TITLE_MAX_LENGTH: number = 25
const DESCRIPTION_MAX_LENGTH: number = 50

class ToDoListItem {
    title: string
    description: string
    isCompleted: boolean
    error: string

    constructor(object: { title: string, description: string, isCompleted: boolean }) {
        this.title = object.title
        this.description = object.description
        this.isCompleted = object.isCompleted
        this.error = ""
    }

    isValid(): boolean {
        return this.getTitleProblem().length === 0 && this.getDescriptionProblem().length === 0
    }

    getTitleProblem(): string {
        if(this.title === undefined || this.title.length === 0) {
            return "The to do must have a title"
        }
        if(this.title.length > TITLE_MAX_LENGTH) {
            return `The title must have a max length of ${TITLE_MAX_LENGTH} characters`
        }
        return ""
    }

    getDescriptionProblem(): string {
        if(this.description === undefined || this.description.length === 0) {
            return "The to do must have a description"
        }
        if(this.description.length > DESCRIPTION_MAX_LENGTH) {
            return `The description must have a max length of ${DESCRIPTION_MAX_LENGTH} characters`
        }
        return ""
    }
}