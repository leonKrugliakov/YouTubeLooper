function getID(url){
    var startID = url.indexOf("watch?") + 8;
    var endID = url.length;
    var id = url.slice(startID, endID);
    return id;
}

function getTime(time){
    var 
}


function search(){
    var searchVal = document.getElementById("searchterm").value;
    var id = getID(searchVal);
    
    $("#output").html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="accelerometer; autoplay;  loop; start="10"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}