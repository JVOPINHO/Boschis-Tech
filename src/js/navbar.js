const button = document.querySelector("#responsiveBtn")
const container = document.querySelector("#links-container")
const list = document.querySelector("#list")

button.addEventListener("click", function() {
    const height = container.getBoundingClientRect().height
    const linksHeight = container.getBoundingClientRect().height

    if (height === 0) {
        container.style.height = `${linksHeight}px`
    } else {
        container.style.height = 0
    }
})