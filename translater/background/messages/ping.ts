import type { PlasmoMessaging } from "@plasmohq/messaging"

const HIDDEN_NUMBER = 541

export type RequestBody = {
  input: number
}

export type RequestResponse = number

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { id } = req.body
  console.log(id)
  res.send("ping")
}

export default handler
