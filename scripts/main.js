import { KneelDiamonds } from "./KneelDiamonds.js"
// KneelDiamonds() defines HTML structure
const mainContainer = document.querySelector("#container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

