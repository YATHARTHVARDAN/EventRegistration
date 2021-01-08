

function tick(id) {
    if (id == 'online')
    {
        var venue = document.getElementById('loc');
        venue.value = "ONLINE";
    }
    else {
        var venue = document.getElementById('loc');
        venue.value = "";
    }
}

var formElem = document.getElementById('imageForm');

var d = new Date();

var hide2 = document.getElementById('hide2');
hide2.value = (((d.getFullYear()*100 + (d.getMonth()+1))*100 + d.getDate())*100 + d.getHours())*100 + d.getMinutes();

formElem.onsubmit = async (e) => {
    e.preventDefault();

    var loading = document.getElementById('loading');
    loading.style.display = "block";
let response = await fetch('https://follege.herokuapp.com/events/addPhoto', {
method: 'POST',
body: new FormData(formElem)
});
let result = await response.json();
if(response.status==200)
{
    loading.style.display="none";
    var upload = document.getElementById('upload');
    upload.innerText = "Saved ✔";
    var hide = document.getElementById('hide');
    hide.value = result;
    console.log(result);
}
else{
    loading.style.display="none";
    var upload = document.getElementById('upload');
    upload.innerText = "Upload";
    alert("An error occurred , upload again");
}
};

function showModal(id)
{
    var modal = document.getElementById(id);
    modal.style.display = "block";
}

function openAgain()
{
    location.reload();
}

