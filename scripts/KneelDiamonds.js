
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./dataAccess.js";
import { JewelryType } from "./JewelryType.js";


// event listener which invokes addCustomOrder()
document.addEventListener(
    "click",
    (clickEvent) => {
        // set a variable equal to click target
        const buttonClicked = clickEvent.target
        // if this thing happens
        if (buttonClicked.id === "orderButton") { 
        // then call this function
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
            
            <section class="jewelry__type options">
                ${JewelryType()}
            </section>
            
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

