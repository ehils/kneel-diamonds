import {getData} from "./database.js";

const database = getData()

export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size =>({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
// set functions responsible for setting state
export const setType = (id) => {
    // 
    database.orderBuilder.typeId = id;

    document.dispatchEvent(new CustomEvent("changeTwo"))
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id; 

    document.dispatchEvent(new CustomEvent("changeTwo"))
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id;

    document.dispatchEvent(new CustomEvent("changeTwo"))
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id;

    document.dispatchEvent(new CustomEvent("changeTwo"))
}

// This function si responsible for changing permanent state

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    // from the orderBuilder
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
