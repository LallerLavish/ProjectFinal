// document.getElementById("fileInput").addEventListener("change", function() {
//     const file = this.files[0];
//     console.log("File selected:", file.name);
//   });
  const input=document.getElementById("fileinput");
  const pre=document.getElementById("preview");
  const removeBtn = document.getElementById("removeBtn");
  const button=document.getElementById("input_btn");
  const h4=document.getElementById("h4");

  input.addEventListener("change", function() {
        const file = this.files[0];
        if (file && file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            pre.src = url;
            pre.style.display = "block";
            button.style.opacity= 0;
            h4.style.opacity=0;
            removeBtn.style.display = "inline-block"; 
        } else {
            alert("Please select a valid image file.");
          }})
          removeBtn.addEventListener("click", function () {
            pre.src = "";
            pre.style.display = "none";
            removeBtn.style.display = "none";
            input.value = "";
            button.style.opacity= 1;
            h4.style.opacity=1;
          })
var loader=document.querySelector("#loader")
setTimeout(function(){
loader.style.top="-100%";
},3300)          
                
