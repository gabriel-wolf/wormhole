function swapall(t) {
    var a = document.getElementsByClassName("swapme");
    var i;

    for (i=0;i<a.length;i++) {
        var x = a[i];
        // x.style.color="red";
        var cont = x.innerHTML;
        
        
function book(name) {
    var el = t[name];
    var toout = "<a href='" + t[name][0] + "'>" + name + "</a>"
    return toout;
}

var l1 = "<span onclick='void(0);' class='tooltip'>";
var INLINENAME = "wormhole";
var l2 = "<span class='info'><span class='pronounce'>";
var TITLE = "Wormhole";
var l3 = "</span><span class='text'>";
var BODY = "A wormhole (also known as Einstein–Rosen bridge) is a passage through spacetime creating shortcuts for long journeys across the universe.";
var l3 = "</span>";
var l4IMG = "<img class='def-img' style='width:inherit;height:auto;' src=";
var IMGLOC = "'imgs/hole01.jpg'";
var l5IMG = "><span class='img-cap-span'>";
var IMGCAP1 = "Image from: ";
var IMGSRC = "<a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a>";
var IMGCAP2 = ".";
var l6 = "</span><span class='bottom-span grid x-small'>";
var SOURCELIST = [
    "<a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a>",
    "<a href='https://physics.aps.org/story/v15/st11'>The Birth of Wormholes</a>"
];
var SOURCESTEXT = "";
var j;
for (j=0;j<SOURCELIST.length;j++) {
    SOURCESTEXT = SOURCESTEXT + SOURCELIST[j];
}
var l7 = "</span></span></span>";

console.log(SOURCESTEXT);



INLINENAME
TITLE
BODY
IMGLOC
IMGCAP1
IMGSRC
IMGCAP2
SOURCELIST



        // console.log(cont);
    }
}


function switchme(ele, t) {
// console.log("started switch");

    var id = ele.id;
    
    var tit = t[0];
    var bod = t[1];

    var out_html = "<div><h1>" + tit + "</h1><p>" + bod + "</p></div>";

    var put_before = "<span id='killmebefore' onclick='void(0);' class='tooltip'>";
    var put_middle = "<a class='sticky'>wormholes baby</a>";
    var put_after = "<span class='info'><span class='pronounce'>Wormhole</span><span class='text'>A wormhole (also known as Einstein–Rosen bridge) is a passage through spacetime creating shortcuts for long journeys across the universe.</span><span class='img-cap-span'>Image of wormhole from <a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a>.</span><span class='bottom-span grid x-small'><a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a><a href='https://physics.aps.org/story/v15/st11'>The Birth of Wormholes</a></span></span></span>";
    
    var elehtml = ele.outerHTML;
    var fullhtml = put_before + put_middle + put_after;

    // console.log(fullhtml);

    // ele.id = "showmesometime"
    // ele.style.display = "none";

    newHTML = ele.insertAdjacentHTML("afterend", fullhtml);

    // console.log(newHTML);
    // ele.remove()

}


function alt(){
    console.log("log sys test");
    alert("alert system test");
}



function stm(ele, t) {
    // console.log("STM");
    // console.log(ele)
    // console.log(t);

    var id = ele.id;
    // console.log(ele.id);

    var tit = t[0];
    var bod = t[1];

    var out_html = "<div><h1>" + tit + "</h1><p>" + bod + "</p></div>";
    // console.log(out_html);

    var put_before = "<span id='killmebefore' onclick='void(0);' class='tooltip'>";
    var put_after = "<span class='info'><span class='pronounce'>Wormhole</span><span class='text'>A wormhole (also known as Einstein–Rosen bridge) is a passage through spacetime creating shortcuts for long journeys across the universe.</span><span class='img-cap-span'>Image of wormhole from <a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a>.</span><span class='bottom-span grid x-small'><a href='https://www.amazon.com/Science-Interstellar-Kip-Thorne/dp/0393351378'>The Science of Interstellar</a><a href='https://physics.aps.org/story/v15/st11'>The Birth of Wormholes</a></span></span></span>";
    
    var elehtml = ele.outerHTML;
    var fullhtml = put_before + elehtml + put_after;

    ele.id = "showmesometime"
    ele.style.display = "none";

    ele.insertAdjacentHTML("afterend", fullhtml);

}

function htm(ele) {
    console.log("HTM");
    document.getElementById("showmesometime").style.display = "auto";
    ele.style.display = "auto";
    document.getElementById("killmebefore").remove()

}



