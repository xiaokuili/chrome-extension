import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        Welcome 
      </h2>
      <p>Enter command/alt+t to translate</p>
    </div>
  )
}

export default IndexPopup
