// 监听来自content.js的消息
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  if (request.action === 'callChatGPT') {
    try {
      const inputText = request.data;
      const resp = await callAI(inputText);
      sendResponse({ chatGPTResponse: resp.message });
    } catch (error) {
      console.error('Error:', error);
      sendResponse({ chatGPTResponse: 'Error occurred' });
    }
  
    return true ;
  }
});



function curTime() {
  var d = new Date();
  var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return str;
}

async function callAI(inputText) {
  // Default options are marked with *
  const url = 'http://localhost:3000/api/health';
  const data = {
    prompt: inputText,
  }
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const result = await response.json();
  return result; // parses JSON response into native JavaScript objects
}


