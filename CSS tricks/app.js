let domResolve;
const domReady = new Promise(resolve=>domResolve = resolve);
window.addEventListener('DOMContentLoaded',domResolve);

domReady.then(()=>{
    const articleContent = document.querySelector(".article-content");
    const fontSizeText = document.querySelector(".computedFontSize");
    let computedFontsize = window.getComputedStyle(articleContent).getPropertyValue("font-size");
    fontSizeText.textContent = computedFontsize;
    window.addEventListener("resize",()=>{
        computedFontsize = window.getComputedStyle(articleContent).getPropertyValue("font-size");
        fontSizeText.textContent = computedFontsize;
    });
});