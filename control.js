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