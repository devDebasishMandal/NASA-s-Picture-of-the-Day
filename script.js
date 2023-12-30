 


function getCurrentImageOfTheDay(){
    let img;
fetch('https://api.nasa.gov/planetary/apod?api_key=wh2QX0r8I911J5XQNxB5Arh5jCWHk6fQ0syGcQQD').then((responseObj)=>{
    const response=responseObj;
    const data=response.json();
    data.then((data)=>{
         img=data.url;
        
    }).catch((err)=>{
        console.log(err);
    })
});

return img;
}



let pic=document.getElementById("current-image-container");
// let x=document.createElement("img");
// x.src=getCurrentImageOfTheDay();
// pic.appendChild(x);

let c=document.createElement("p");
c.textContent=getCurrentImageOfTheDay();
pic.appendChild(c);
