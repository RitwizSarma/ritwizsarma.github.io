(function () {
  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    var copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }

  document.querySelectorAll(".portfolio-snippet").forEach(function (snippet) {
    var button = snippet.querySelector(".portfolio-copy-button");
    var code = snippet.querySelector("code");
    if (!button || !code) return;

    button.addEventListener("click", function () {
      var text = code.textContent.trim();
      var copy = navigator.clipboard
        ? navigator.clipboard.writeText(text).then(function () { return true; }).catch(function () { return fallbackCopy(text); })
        : Promise.resolve(fallbackCopy(text));

      copy.then(function (copied) {
        if (!copied) return;
        var label = button.querySelector(".portfolio-copy-label");
        button.classList.add("is-copied");
        button.setAttribute("aria-label", "Installation command copied");
        if (label) label.textContent = "Copied";
        window.setTimeout(function () {
          button.classList.remove("is-copied");
          button.setAttribute("aria-label", "Copy installation command");
          if (label) label.textContent = "Copy";
        }, 1600);
      });
    });
  });
})();
