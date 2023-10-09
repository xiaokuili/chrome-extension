


document.addEventListener('keydown', function (event) {
    if (event.key == "q") {
        chrome.runtime.sendMessage({ action: 'callChatGPT', data: 'YourInputText' }, function (response) {
            // 在这里处理来自后台的响应
            // 例如，将响应内容显示在页面上
            console.log(response.chatGPTResponse);
            PrettyPrintAI(response.chatGPTResponse);

        });
    }
    // 在这里可以添加你的逻辑
    // 例如，检查按下的键是否是特定的键，执行相应的操作
});


function PrettyPrintAI(response) {
    var previousDiv = document.getElementById('floating-div');
    console.log(previousDiv);
    
    if (previousDiv) {
        previousDiv.remove();
    }
    // 创建一个新的 div 元素
    var newDiv = document.createElement('div');
    newDiv.id = 'floating-div';  // 为了能够识别和移除，可以为新元素设置一个唯一的 id

    // 设置 div 的内容
    newDiv.innerHTML = response;

    // 添加样式（可选）
    newDiv.style.position = 'fixed';
    newDiv.style.top = '0';
    newDiv.style.right = '0';
    newDiv.style.padding = '10px';
    newDiv.style.backgroundColor = '#f0f0f0';
    newDiv.style.border = '1px solid #ccc';
    // 将新创建的 div 添加到页面的 body 中
    document.body.appendChild(newDiv);
}