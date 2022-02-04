import { getOrders, getStyles, getSizes, getMetals, getTypes } from "./dataAccess.js"

const buildOrderListItem = (order) => {

    const styles = getStyles()

    // Remember that the function you pass to find() must return true/false
    const foundStyle = styles.find(

        (style) => {
            return style.id === order.styleId
        }
    )
    
    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundSize = sizes.find(

        (size) => {
            return size.id === order.sizeId
        }
    )
    
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(

        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    
    // import type list
    const types = getTypes()
    // check to see if type.id === order.typeId
    const foundType = types.find(
        (type) => {
            return type.id === parseInt(order.typeId)
        }
    )
    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.multiplier
        
    const costString = totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
        })
    
        return `<li>
            Order #${order.id} cost ${costString}
        </li>`
    // const jewelryTypeSelected = foundType.id
    // if (parseInt(jewelryTypeSelected) === 1)
        
    // {
    //     const totalCost = foundMetal.price + foundSize.price + foundStyle.price
    
    //     const costString = totalCost.toLocaleString("en-US", {
    //         style: "currency",
    //         currency: "USD"
    // })

    // return `<li>
    //     Order #${order.id} cost ${costString}
    // </li>`
    // } else if (parseInt(jewelryTypeSelected) === 2) {
    //     {
    //         const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)*2
        
    //         const costString = totalCost.toLocaleString("en-US", {
    //             style: "currency",
    //             currency: "USD"
    //     })
    
    //     return `<li>
    //         Order #${order.id} cost ${costString}
    //     </li>`
    //     }
    // } else if (parseInt(jewelryTypeSelected) === 3) {
    //     {
    //         const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)*4
        
    //         const costString = totalCost.toLocaleString("en-US", {
    //             style: "currency",
    //             currency: "USD"
    //     })
    
    //     return `<li>
    //         Order #${order.id} cost ${costString}
    //     </li>`
    //     }
    // }
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    // const listItems = orders.map(order => {
    //     return buildOrderListItem(order)
    // }
    // )

    html += listItems.join("")
    html += "</ul>"

    return html
}

