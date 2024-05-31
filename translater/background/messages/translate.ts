import type { PlasmoMessaging } from "@plasmohq/messaging"

const HIDDEN_NUMBER = 541

export type RequestBody = {
  input: number
}

export type RequestResponse = number
const fetcher = async (text) => {
  var myHeaders = new Headers()
  myHeaders.append("Accept", "application/json")
  myHeaders.append(
    "Authorization",
    "Bearer sk-6oGW7PSy3cc56fA8fBD8T3BlBkFJA87Ee7bafe474e748e00"
  )
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)")
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "你是一个翻译人员，提供的英语内容，充分理解，并且进行翻译成中文"
      },
      {
        role: "user",
        content: text
      }
    ]
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }

  try {
    const response = await fetch(
      "https://aigptx.top/v1/chat/completions",
      requestOptions
    )
    console.log("fetcher")
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

// 监听来自content.js的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translate") {
    sendResponse({ chatGPTResponse: "this is response" })

    // const result = await fetcher(request.data)
    // if (result.choices) {
    //   const response = result.choices[0].message.content
    //   sendResponse({ chatGPTResponse: response })
    // } else {
    //   sendResponse({ chatGPTResponse: result })
    // }
  }
})

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { text } = req.body
  const result = await fetcher(text)
  res.send(result)
}

export default handler
