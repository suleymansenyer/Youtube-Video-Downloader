function cleaner() {
    console.log("this page...")
}
function htmlCardCreator(infoArray,videoDetails){
    document.getElementById('show-card').innerHTML = 
    '<div class="card">'+
    `<img src="${videoDetails.thumbnails.slice(-1)[0].url}"  class="card-img-top" alt="..."> `+
    '<div class="card-body"> '+
    `<h5 class="card-title">${videoDetails.title}</h5>`+
    `<p class="card-text">${videoDetails.description}</p>`+
    '</div>'+
    '<ul id="card-links" class="list-group list-group-flush">'
    '</ul>'+
    '</div>'+
    '</div>'
        infoArray.forEach(element => {
            document.getElementById("card-links").innerHTML += 
            `<li class="list-group-item">Kalite | ${element.qualityLabel} |  <a href="${element.url}" >İndir</a> </li>`
        });
    infoArray.forEach( e => {
        console.log(e)
    });
}


document.getElementById("down-btn").addEventListener('click', e => {
    e.preventDefault();
    const base_url = window.location.origin
    var yt_url = document.getElementById("down-inp").value
    fetch(base_url + "/download?yturl=" + yt_url ,{method:"POST"}).then(data => {
        var a = data.json().then((e) => {
            
            if (e.videoDetails == "Bir hata meydana geldi... Girdiğiniz linki kontrol ediniz.") {
                alert("Girdiğiniz linki kontrol ediniz.")
                return
            }


            var infoArray = e.videoInfo.adaptiveFormats
            var videoDetails = e.videoDetails
            htmlCardCreator(infoArray,videoDetails)
        })
    })
})