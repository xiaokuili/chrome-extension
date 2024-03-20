import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  // matches: ["https://www.plasmo.com/*"]
}

document.addEventListener("keydown", function (event) {
  const content = window.getSelection().toString().trim()

  if (event.altKey && event.key === "t") {
    PrettyGPT()
    chrome.runtime.sendMessage(
      { action: "translate", data: content },
      function (response) {
        // 在这里处理来自后台的响应
        // 例如，将响应内容显示在页面上
        console.log(response.chatGPTResponse)
        PrettyGPTResponse(response.chatGPTResponse)
      }
    )
  }

  if (event.key === "Escape") {
    PrettyClose()
  }

  // 在这里可以添加你的逻辑
  // 例如，检查按下的键是否是特定的键，执行相应的操作
})

const gpt = "floating-div-gpt"

function PrettyGPT() {
  Pretty("正在查询gpt...")
}
function PrettyGPTResponse(response) {
  Pretty(response)
}

function PrettyClose() {
  var previousDiv = document.getElementById(gpt)
  console.log(previousDiv)

  if (previousDiv) {
    previousDiv.remove()
  }
}

function Pretty(response) {
  var previousDiv = document.getElementById(gpt)
  console.log(previousDiv)

  if (previousDiv) {
    previousDiv.remove()
  }
  // 创建一个新的 div 元素
  var newDiv = document.createElement("div")
  newDiv.id = gpt // 为了能够识别和移除，可以为新元素设置一个唯一的 id

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
