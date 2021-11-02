// Turn off page loader, render Leaflet.js library
window.addEventListener("load", quitAnimation);
window.addEventListener("resize", ()=>
{

});



function flipCard(cardID)
{
    
    
    let width = window.innerWidth;
    if(width < 991)
    {
        let myCard = document.getElementById(cardID);
        // myCard.style.transform = "rotateY(180deg)";
        myCard.style.animationName = "cardFlipBack";
    }
}


// CHANGE WHEN SOCIAL MEDIA PAGES ADDED
for(let counter = 0; counter < document.querySelectorAll('.social').length; counter++)
{
    document.querySelectorAll('.social')[counter].addEventListener("click", ()=>
    {
        alert("Social media pages not created yet!");
    })
}




// Leaflet.js map resize tiles





// Leaflet.js map initialization and display
let latitude = 41.0355953;
let longitude = -83.646441;
let mymap = L.map('mapid').setView([latitude, longitude], 13);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);
var marker = L.marker([latitude, longitude]).addTo(mymap);
marker.bindPopup("Central Church of Christ<br>307 E Hardin St, Findlay, OH 45840<br>");
mymap.invalidateSize();




// Display the map and button
function displayMap()
{
    let map = document.getElementById("mapid");
    map.style.zIndex = "1000";
    let xButton = document.getElementById("mapClose");
    xButton.style.display = "block";
    
}



// Close the map
function closeMap()
{
    let map = document.getElementById("mapid");
    map.style.zIndex = "-10000";
    let xButton = document.getElementById("mapClose");
    xButton.style.display = "none";
}




// Contact form validation objects
let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');




// Executes prior to PHP execution
form.addEventListener("submit", (event)=>
{

    // Check if input is valid
    let acceptName = isNameValid(event);
    let acceptEmail = isEmailValid(event);
    let acceptPhone = isPhoneValid(event);
    let acceptMessage = isMessageValid(event);


    // If the form is valid, allow PHP to execute
    // Else cancel submission with return false
    if(acceptName === true && acceptEmail === true && acceptPhone === true && acceptMessage ===true)
    {
        alert("Thank you for your submission!");
    }
    else
    {
        alert("Arrived");
        return false;
    }
    
})




// Validates name, checks for SQL injections
function isNameValid(event)
{
    let str = document.getElementById('name').value;
    let trueOrFalse = true;
    for(let counter = 0; counter < str.length; counter++)
    {
        if(!(/[a-zA-Z]/).test(str[counter]))
        {
            if(str[counter] !== ' ')
            {
                trueOrFalse = false;
                alert("Invalid name.");
                event.preventDefault();
            }
        }
    }
    return trueOrFalse;
}




// Validates email, only allows certain characters
function isEmailValid(event)
{
    let str = document.getElementById('email').value;
    let trueOrFalse = true;
    for(let counter = 0; counter < str.length; counter++)
    {
        if(!(/[a-zA-Z]/).test(str[counter]))
        {
            if(str[counter] !== '@' && str[counter] !== '.' && Number.isInteger(str[counter]))
            {
                trueOrFalse = false;
                alert("Invalid email.");
                event.preventDefault();
            }
        }
    }
    return trueOrFalse;
}




// Validates phone, only allows numbers dashes or addition sign
function isPhoneValid(event)
{
    let str = document.getElementById('phone').value;
    let trueOrFalse = true;
    for(let counter = 0; counter < str.length; counter++)
    {

            if(str[counter] !== '-' && str[counter] !== '+')
            {
                if(Number.isInteger(parseInt(str[counter]) === false))
                {
                    trueOrFalse = false;
                    alert('Invalid phone');
                    event.preventDefault();
                }
                if((/[a-zA-Z]/).test(str[counter]))
                {
                    trueOrFalse = false;
                    alert('Invalid phone');
                    event.preventDefault();
                }
                
            }

    }
    return trueOrFalse;
}




// Validates message, looks for cross site scripting and SQL injections
function isMessageValid(event)
{
    let str = document.getElementById('message').value;
    let trueOrFalse = true;
    alert("Here");
    setTimeout(2000, ()=>{});
    for(let counter = 0; counter < str.length; counter++)
    {
        if((/[a-zA-Z]/).test(str[counter]) === false && str[counter] !== ' ')
        {
            trueOrFalse = false;
            alert("Invalid message. Alphanumerics only.");
            event.preventDefault();
        }
    }
    return trueOrFalse;
}




// Calendar page animation
function swiperRight()
{
    let slideUp = document.getElementById('leftPage');
    slideUp.style.transform = 'translateX(250%)';
    slideUp.style.animationName = 'slideUp';
    let buttonClose = document.getElementById('dateButton');

        buttonClose.style.display = 'none';

}




// Calendar page, informational animation
function swiperDown()
{
    let slideUp = document.getElementById('leftPage');
    slideUp.style.transform = 'translateX(0%)';
    slideUp.style.animationName = 'slideDown';
    let buttonClose = document.getElementById('dateButton');
    buttonClose.style.display = 'inherit';
}




// Function factory for any kind of opening event
function openPage(opener)
{
    let myPage = document.getElementsByClassName(opener);
    myPage[0].style.display = "flex";
    let stopScroll = document.querySelectorAll('body');
    for(let counter = 0; counter < stopScroll.length; counter++)
    {
        stopScroll[counter].style.position = 'fixed';
    }
}




// General closing factory function
function closePage(closer)
{
    let myPage = document.getElementsByClassName(closer);
    myPage[0].style.display = "none";
    let stopScroll = document.querySelectorAll('body');
    for(let counter = 0; counter < stopScroll.length; counter++)
    {
        stopScroll[counter].style.position = 'inherit';
    }
}




// Halts animation on all pages
function quitAnimation()
{
    let closer = document.getElementsByClassName("animationPage");
    closer[0].style.display = "none";
}



// Slide show control
function updateSlide(slideNumber)
{
    let slideShow = document.querySelectorAll('.content');
    for(let counter = 0; counter < slideShow.length; counter++)
    {
        slideShow[counter].style.display = 'none';
    }
    let mySlide = document.querySelector(slideNumber);
    mySlide.style.display = 'flex';
}




// Slide show controls
function openClose(idOpen, classClose, animationNumber)
{
    // Which slide show to control
    let myId = document.querySelector(idOpen);
    let closeClass = document.getElementsByClassName('controlDisplay');
    let animation = document.querySelectorAll('.innerPage');



    // Initiate animation for all class objects
    for(let counter = 0; counter < animation.length; counter++)
    {
        animation[counter].style.animationName = `${animationNumber}`;
    }


    let counterSelect =0;
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        closeClass[counter].style.display = "none";
    }


    // Control display information
    myId.style.display = "flex";
    let yesOrNo = document.querySelectorAll('.controlDisplay');
    let circle = document.querySelectorAll('.circleSS');



    // Determine if slide has values, else change background
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        if(yesOrNo[counter].style.display !== 'none')
        {
            circle[counter].style.background = '#05386b';
        }
        else
        {
            circle[counter].style.background = 'rgba(0,0,0,0)';
        }
    }

    

}



let map;



// Google map API...Still undecided between this and Leaflet.js
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.03570179880634, lng: 83.64643271631078 },
    zoom: 8,
  });
}