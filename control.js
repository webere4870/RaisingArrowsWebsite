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
