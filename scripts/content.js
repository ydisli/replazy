(function () {
  "use strict";

  // Create the buttons, styling with JS is needed to avoid some style conflicts and overrides 
  function createButton(iconCode, title, onClick) {
    const button = document.createElement("button");
    button.innerHTML = iconCode;
    button.title = title;
    button.style.width = "28px";
    button.style.height = "28px";
    button.style.border = "none";
    button.style.background = "none";
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.margin = "auto";
    button.style.marginBottom = "10px";
    button.style.justifyContent = "center";
    button.addEventListener("click", onClick);
    return button;
  }

  // Reply action
  function replyAction() {
    const replyButton = document.querySelector('span.bkH[role="link"]');
    if (replyButton) {
      replyButton.click();
    }
  }

  // Reply All action
  function replyAllAction() {
    const replyAllButton = document.querySelector('span.bkI[role="link"]');
    if (replyAllButton) {
      replyAllButton.click();
    }
  }

  // Forward action
  function forwardAction() {
    const forwardButton = document.querySelector('span.bkG[role="link"]');
    if (forwardButton) {
      forwardButton.click();
    }
  }

  // Add the buttons to Gmail interface with a delay
  setTimeout(function () {
    const appsBar = document.querySelector('[role="tablist"]');
    if (appsBar) {
      const replyButtonIcon =
        '<i class="material-icons reply">reply</i>';
      const replyAllButtonIcon =
        '<i class="material-icons reply_all">reply_all</i>';
      const forwardButtonIcon =
        '<i class="material-icons forward">forward</i>';

      const replyButton = createButton(replyButtonIcon, "Reply", replyAction);
      const replyAllButton = createButton(replyAllButtonIcon, "Reply All", replyAllAction);
      const forwardButton = createButton(forwardButtonIcon, "Forward", forwardAction);

      appsBar.appendChild(replyButton);
      appsBar.appendChild(replyAllButton);
      appsBar.appendChild(forwardButton);
    }
  }, 3000);

  // Inject the Google Icons CSS
  const style = document.createElement("style");
  style.textContent =
    '@import url("https://fonts.googleapis.com/icon?family=Material+Icons");';
  document.head.appendChild(style);
})();
