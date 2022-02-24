const app = document.getElementById("app")
const appFrag = document.createDocumentFragment()

let bubbleNum = 700


const createBubbles = () => {
  for (let i = 0; i < bubbleNum; i++) {
    const bubble = document.createElement("div")
    bubble.classList.add("bubble")
    appFrag.appendChild(bubble)
  }

  app.appendChild(appFrag)
}

createBubbles()