// SCRIPT_TO_EDIT.js

// Function to toggle the visibility of the spans
function toggleSpans() {
    var spans = document.querySelectorAll('#s5 > .span-container > span');
  
    spans.forEach(function(span) {
      if (span.style.display === 'none' || span.style.display === '') {
        span.style.display = 'block';
      } else {
        span.style.display = 'none';
      }
    });
  }
  
  // Attach click event listener to the button
  var toggleButton = document.querySelector('#toggleButton');
  toggleButton.addEventListener('click', toggleSpans);
  