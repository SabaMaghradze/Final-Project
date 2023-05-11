function convertPxToRem(pxValue) {
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const remValue = pxValue / baseFontSize;
    return remValue.toFixed(2) + 'rem';
}

// Get all elements in the HTML file
const elements = document.querySelectorAll('*');

// Loop through each element
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // Get the element's font size in pixels
    const fontSizePx = parseFloat(getComputedStyle(element).fontSize);

    // Convert the pixel value to rem and update the element's style
    element.style.fontSize = convertPxToRem(fontSizePx);
}
