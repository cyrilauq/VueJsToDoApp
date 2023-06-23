export { ToDoAlreadyInList, ToDoNotInList }

/**
 * This error represents the fact that a to do is already present in a list of to do.
 * 
 * @author Cyril Auquier
 */
class ToDoAlreadyInList extends Error {
    
    /**
     * 
     * 
     * @param message   Message that the error will display
     */
    constructor(message: string) {
        super(message)
    }

}
/**
 * This error represents the fact that a to do isn't present in a list of to do.
 * 
 * @author Cyril Auquier
 */
class ToDoNotInList extends Error {
    
    /**
     * 
     * 
     * @param message   Message that the error will display
     */
    constructor(message: string) {
        super(message)
    }

}