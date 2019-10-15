window.onload = function() {
  console.log("hellow");

  const button = document.getElementById("save");
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var text = document.getElementById('title');
  const author = document.getElementById("author");
  bannerImage = document.getElementById('inputFileToLoad');
  var imgData;


  context.textBaseline = "middle";
  context.textAlign = "center";
  context.fillStyle = "green";
  canvas.width = 640;
  canvas.height = 640;
  context.fillRect(canvas.width / 2, 50, canvas.width / 2, canvas.height / 2);

  button.addEventListener("click", save);



 encodeImageFileAsURL= (element)=> {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      localStorage.setItem("imgData", reader.result);
    }
    reader.readAsDataURL(file);
  }



function save(e) {

    e.preventDefault();
    var imgData = localStorage.getItem('imgData');
    
    var img = new Image;
    img.src = imgData;
  
    
  
    console.log(text.value);

    img.onload = function(){
        context.drawImage(img, 10, 10);
        context.font = "18pt Calibri";
        context.fillStyle = 'white';
        context.fillText(text.value, 90, 80);
        context.fillStyle = 'yellow';
        context.fillText(author.value, 90, 90);
        context.fillStyle = '#fbfbfb';



        
    };




//title.value !== '' && author.value !== '' && 
      if(bannerImage.value !== '' ){
  
          console.log('save')
      }else{
          alert('falta info');
      }
    
  };
};



