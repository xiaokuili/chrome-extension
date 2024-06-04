;(function () {
  "use strict"

  if (location.href.indexOf("zhihu.com/question") != -1) {
    const buttons = document.getElementsByClassName("Modal-closeButton")

    if (buttons.length !== 0) {
      buttons[0].click()
    }
  }

  if (location.href.indexOf("zhihu.com/signin") != -1) {
    location.href = "https://www.zhihu.com/explore"
  } else if (location.href.indexOf("zhihu.com/explore") != -1) {
    let timeout = 400
    // console.log(timeout);
    setTimeout(function () {
      let searchInput = document.getElementById("Popover1-toggle")
      if (searchInput) {
        searchInput.focus()
      }
    }, timeout)
  }
})()
