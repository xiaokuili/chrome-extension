import type { PlasmoCSConfig } from "plasmo"

import { sendToBackground } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

window.addEventListener("keydown", async () => {
  const content = window.getSelection().toString().trim()
  console.log(process.env.PLASMO_PUBLIC_KEY)

  if (event.key === "t" && content.length > 0) {
    pretty("正在查询gpt...")
    const resp = await sendToBackground({
      name: "translate",
      body: {
        text: content
      },
      extensionId: process.env.PLASMO_PUBLIC_KEY // find this in chrome's extension manager
    })

    // handle resp
    resp.choices
      ? pretty(resp.choices[0]?.message?.content)
      : pretty("翻译失败" + resp)
  }

  if (event.key === "Escape") {
    var previousDiv = document.getElementById("floating-div-gpt")
    console.log(previousDiv)

    if (previousDiv) {
      previousDiv.remove()
    }
  }
})

function pretty(response) {
  var previousDiv = document.getElementById("floating-div-gpt")
  console.log(previousDiv)

  if (previousDiv) {
    previousDiv.remove()
  }
  // 创建一个新的 div 元素
  var newDiv = document.createElement("div")
  newDiv.id = "floating-div-gpt" // 为了能够识别和移除，可以为新元素设置一个唯一的 id

  newDiv.innerHTML = response

  // 添加样式（可选）
  newDiv.style.position = "fixed"
  newDiv.style.top = "0"
  newDiv.style.right = "0"
  newDiv.style.padding = "10px"
  newDiv.style.backgroundColor = "#E6E6FA"
  newDiv.style.border = "1px solid #ccc"
  newDiv.style.zIndex = "999999999"

  // 将新创建的 div 添加到页面的 body 中
  document.body.appendChild(newDiv)
}
