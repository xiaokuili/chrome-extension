import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const handlePing = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      }
    })
    console.log(resp)
  }

  const handleTs = async () => {
    const resp = await sendToBackground({
      name: "translate",
      body: {
        text: "apple"
      }
    })
    console.log(resp)
  }
  return (
    <div>
      <button onClick={handlePing}>Click</button>
      <button onClick={handleTs}>Translate</button>
    </div>
  )
}

export default IndexPopup
