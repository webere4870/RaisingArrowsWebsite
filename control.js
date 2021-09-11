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