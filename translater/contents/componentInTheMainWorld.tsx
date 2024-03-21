import type { PlasmoCSConfig } from "plasmo"

import { sendToBackground } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

window.addEventListener("load", async () => {
  console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  )
  const resp = await sendToBackground({
    name: "ping",
    body: {
      id: 123
    },
    extensionId: "pinlacmcfkpmkdhomaofoodflfdkaffo" // find this in chrome's extension manager
  })

  console.log(resp)
})
