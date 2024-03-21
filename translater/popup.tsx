import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const handle = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      }
    })
    console.log(resp)
  }
  return (
    <div>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default IndexPopup
