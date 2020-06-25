document.getElementById('news-click').addEventListener('click', (e) => {
    if(document.getElementById('right-block').style.display !== "block"){
        document.getElementById('right-block').style.display = "block";
    } else {
        document.getElementById('right-block').style.display = "none";
    }
})