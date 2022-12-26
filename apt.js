const btnEL = document.getElementById("btn")
const errorMessageEL = document.getElementById("errorMessage");
const galleryEL = document.getElementById("gallery")
const containerEL = document.getElementById("container")


//Note to wait for the response use await and async function

//use this function to generate free image Api
 async function fetchImage() {
    //the value that updates the pictures everytime
    const inputValue = document.getElementById('input').value;
    //we want only 1- 10 images
    if(inputValue < 1 || inputValue > 10 ) {
        errorMessageEL.style.display = "block"
        errorMessageEL.textContent = "Only 1 to 10 pictures allowed"
        //for the Function not fetch again when more than 10 or less than 1
        return;

    } else {
        errorMessageEL.style.display = "none"

        
    }

    imgs = ""
    
    try {


     
    btnEL.style.display = "none";
    const loading = `<img src="Dual Ring-2.4s-111px.svg" />`;  //loading image was gotten from loading.io
    galleryEL.innerHTML = loading;
            //Fetch() sends request to the server.
            await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=EuhhsXiQle2xGNvOU21nP4zegBpCM5T6_8se9RzQEuo`).then((res)=>
            res.json().then((data)=>{
                //Json() converts fetching into readable file.
                //console.log(data);
                //check of data exist
                if(data) {
                    data.forEach((pic)=> {
                       imgs += `<img src=${pic.urls.small} alt="image"/>`;
                       galleryEL.style.display ="block"
                       galleryEL.innerHTML = imgs;
                       btnEL.style.display = "block";
                       
            
                    })
                }
            })
            
            );
    
            containerEL.scrollTop = 0;

    } catch(error) {
     console.log(error);
     errorMessageEL.style.display ="block";
     errorMessageEL.innerHTML = "An error happened, try again later";
     btnEL.style.display = "block";
     galleryEL.style.display ="none";

    }
 //Json() converts fetching into readable file.


    
} 

 
//add event listner of click, that will run function fetchImage
btnEL.addEventListener('click',fetchImage)