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
    "Bearer sk-czidPK9DRTOmMc5j9b845f8dDe3c416881A2E5Fa65E6A038"
  )
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)")
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    model: "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "user",
        content: "翻译成中文，" + text
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
      "https://oneapi.gptnb.me/v1/chat/completions",
      requestOptions
    )
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
