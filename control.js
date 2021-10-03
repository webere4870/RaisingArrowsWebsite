window.addEventListener("load", quitAnimation);

let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
form.addEventListener("submit", (event)=>
{
    let acceptName = isNameValid(event);
    let acceptEmail = isEmailValid(event);
    let acceptPhone = isPhoneValid(event);
    let acceptMessage = isMessageValid(event);
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

function swiperRight()
{
    let slideUp = document.getElementById('leftPage');
    slideUp.style.transform = 'translateX(250%)';
    slideUp.style.animationName = 'slideUp';
    let buttonClose = document.getElementById('dateButton');

        buttonClose.style.display = 'none';

}

function swiperDown()
{
    let slideUp = document.getElementById('leftPage');
    slideUp.style.transform = 'translateX(0%)';
    slideUp.style.animationName = 'slideDown';
    let buttonClose = document.getElementById('dateButton');
    buttonClose.style.display = 'inherit';
}

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

function quitAnimation()
{
    let closer = document.getElementsByClassName("animationPage");
    closer[0].style.display = "none";
}

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

function openClose(idOpen, classClose, animationNumber)
{
    let myId = document.querySelector(idOpen);
    let closeClass = document.getElementsByClassName('controlDisplay');
    let animation = document.querySelectorAll('.innerPage');
    for(let counter = 0; counter < animation.length; counter++)
    {
        animation[counter].style.animationName = `${animationNumber}`;
    }
    let counterSelect =0;
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        closeClass[counter].style.display = "none";
    }
    myId.style.display = "flex";
    let yesOrNo = document.querySelectorAll('.controlDisplay');
    let circle = document.querySelectorAll('.circleSS');
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        if(yesOrNo[counter].style.display !== 'none')
        {
            circle[counter].style.background = 'white';
        }
        else
        {
            circle[counter].style.background = 'rgba(0,0,0,0)';
        }
    }

    

}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.03570179880634, lng: 83.64643271631078 },
    zoom: 8,
  });
}