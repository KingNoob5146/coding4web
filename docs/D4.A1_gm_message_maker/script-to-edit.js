const primaryTitleInput = document.getElementById('primary-title');
const secondaryTitleInput = document.getElementById('secondary-title');
const outputText1 = document.getElementById('text-1');
const outputText2 = document.getElementById('text-2');


primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);


function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

function selectImage(){
    let element = document.getElementById("dropdown").value;
    document.getElementById("imagebox").src = element;
}

// Adding color to texts
const fontColorSelect = document.getElementById('font-color');

// Add event listeners to title input fields
primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontColorSelect.addEventListener('change', updateFontColor);

// Function to update the output text
function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

// Function to update the font color
function updateFontColor() {
    const selectedColor = fontColorSelect.value;
    
    outputText1.style.color = selectedColor;
    outputText2.style.color = selectedColor;
}

const fontSizeRange = document.getElementById('font-size');

// Add event listeners to title input fields
primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontSizeRange.addEventListener('input', updateFontSize);

// Function to update the output text
function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

// Function to update the font size
function updateFontSize() {
    const fontSize = fontSizeRange.value + 'px';
    
    outputText1.style.fontSize = fontSize;
    outputText2.style.fontSize = fontSize;
}

const fontCursive = document.getElementById('font-cursive');
const fontSerif = document.getElementById('font-serif');
const fontSansSerif = document.getElementById('font-sans-serif');

// Add event listeners to title input fields
primaryTitleInput.addEventListener('input', updateText);
secondaryTitleInput.addEventListener('input', updateText);
fontCursive.addEventListener('change', updateFontFamily);
fontSerif.addEventListener('change', updateFontFamily);
fontSansSerif.addEventListener('change', updateFontFamily);

// Function to update the output text
function updateText() {
    const primaryTitle = primaryTitleInput.value;
    const secondaryTitle = secondaryTitleInput.value;

    outputText1.textContent = primaryTitle;
    outputText2.textContent = secondaryTitle;
}

// Function to update the font family
function updateFontFamily() {
    let fontFamily = 'sans-serif';

    if (fontCursive.checked) {
        fontFamily = 'cursive';
    } else if (fontSerif.checked) {
        fontFamily = 'serif';
    }

    outputText1.style.fontFamily = fontFamily;
    outputText2.style.fontFamily = fontFamily;
}

//adding stroke to the text

function adjuststroke(){
    textsin = document.getElementById('stroker').value;
    tostroke = document.getElementById('text-1');
    tostroke.style.webkitTextStrokeWidth = textsin + "px";
}


//stroke colors
function updateStrokeColor() {
    const strokeColorSelect = document.getElementById("text-stroke-color");
    const selectedStrokeColor = strokeColorSelect.value;
    
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    
    text1.style.webkitTextStrokeColor = selectedStrokeColor;
    text2.style.webkitTextStrokeColor = selectedStrokeColor;
    
    text1.style.textStrokeColor = selectedStrokeColor;
    text2.style.textStrokeColor = selectedStrokeColor;
}
