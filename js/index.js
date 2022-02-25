const app = document.getElementById("app")
const appFrag = document.createDocumentFragment()

let bubbleNum = 700


const createBubbles = () => {
  for (let i = 0; i < bubbleNum; i++) {
    const bubbleFrame = document.createElement("div")
    const bubble = document.createElement("div")

    bubbleFrame.classList.add("bubble-frame")
    bubble.classList.add("bubble")

    bubbleFrame.appendChild(bubble)
    // app.appendChild(bubbleFrame)
    appFrag.appendChild(bubbleFrame)
  }

  app.appendChild(appFrag)
}

createBubbles()