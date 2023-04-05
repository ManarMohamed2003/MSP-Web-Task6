let Name = document.getElementById("book-name");
let breif = document.getElementById("book-brief");
let rating = document.getElementById("rating");
let read = document.getElementById("read");
let notRead = document.getElementById("didnot-read");
let image = document.getElementById("image");
let addBook = document.getElementsByTagName("button")[0];
let resetBook = document.getElementById("reset");
let books = document.getElementById("library");

resetBook.onclick = function(){
    Name.value="";
    breif.value="";
    rating.value = "";
    read.checked=false;
    notRead.checked=false;
    image.value="";
}
addBook.onclick = function(){
    let imagePath = image.value;
    let imagePathSplit = imagePath.split("\\");
    let imageName = imagePathSplit[imagePathSplit.length-1];
   let rate =+rating.value;
   let fullStars="";
   let emptyStars="";
   for(let x=0;x<rate;x++){
    fullStars+=`<img class="star" src="images/star2.png"/>`;
   }
   for(let y=0;y<5-rate;y++){
    emptyStars+=`<img class="star" src="images/star1.png"/>`;
   }
    if(read.checked==true){
        books.innerHTML +=`<div class="book backgroundColor">

        <img id="bookCover" src="images/${imageName}"/>
    
        <p id="bookName">${Name.value}</p>
    
        <p id="bookBrief">${breif.value}</p>

        <div class="stars">
        ${fullStars+emptyStars}
        </div>

        <button id="del" onclick="deleteTask(this)">Delete Book</button>
        </div>`;
    }
    else{
        books.innerHTML +=`<div class="book">

        <img id="bookCover" src="images/${imageName}"/>
        
        <p id="bookName">${Name.value}</p>
    
        <p id="bookBrief">${breif.value}</p>

        <div class="stars">
        ${fullStars+emptyStars}
        </div>
    
        <button id="del" onclick="deleteTask(this)">Delete Book</button>
        </div>`;
    }
   
    Name.value="";
    breif.value="";
    rating.value = "";
    read.checked=false;
    notRead.checked=false;
    image.value="";
}

function deleteTask(btn){
    btn.parentElement.remove();
}
