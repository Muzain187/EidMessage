let i = 0;
let txt = '';
let speed = 150;


function geturlData(){
    let geturl = window.location.search.slice(1);
    console.log(geturl);
    geturl = geturl.replace(/=/g,'":"');
    geturl = geturl.replace(/&/g,'","');
    geturl = '{"'+geturl+'"}';
    let obj = JSON.parse(geturl);

    txt = obj.name;
    txt = txt.replace("%20"," ")
}
geturlData();



function typewriter() {
    if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
    }

}
typewriter();




let sharebtn = document.getElementById('share');
sharebtn.addEventListener('click',()=>{
    console.log('c')
    let name = document.getElementById('myText').value;
    // alert(name);
    console.log(name);
    console.log("clicked");
    
    let url = new URL('http://127.0.0.1:5500/eidWish/index.html');
    url.searchParams.set('name', `${name}`);
    console.log(url.href);
    
    let message = `${name} is wishing u click the link to see ${url.href}`;
    console.log(message);
    window.open('whatsapp://send?text='+message);

})


