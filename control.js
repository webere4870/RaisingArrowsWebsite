window.addEventListener("load", quitAnimation);

function openPage(opener)
{
    let myPage = document.getElementsByClassName(opener);
    myPage[0].style.display = "flex";
}

function closePage(closer)
{
    let myPage = document.getElementsByClassName(closer);
    myPage[0].style.display = "none";
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

function openClose(idOpen, classClose)
{
    let myId = document.querySelector(idOpen);
    let closeClass = document.getElementsByClassName('controlDisplay');
    let counterSelect =0;
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        closeClass[counter].style.display = "none";
    }
    let yesOrNo = document.querySelectorAll('.controlDisplay');
    let circle = document.querySelectorAll('.circleSS');
    for(let counter = 0; counter < closeClass.length; counter++)
    {
        let stringer = yesOrNo[counter].style.display;
        if(stringer === 'flex')
        {
            circle[counter].style.background = '#05386b';
        }
        else
        {
            circle[counter].style.background = '#06d6a0';
        }
    }

    myId.style.display = "flex";

}