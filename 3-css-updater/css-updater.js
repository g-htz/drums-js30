const inputs = document.querySelectorAll('.controls input');

let receiveChanges = function() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${ this.name }`, this.value + suffix)
}

function imgInput(){
    document.getElementById('file').click();
 }
  
inputs.forEach(input => input.addEventListener('change', receiveChanges));
inputs.forEach(input => input.addEventListener('mousemove', receiveChanges));

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
