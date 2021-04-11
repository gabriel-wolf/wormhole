
function book(t, name, which = "title") {
    var el = t[name];
    var auth = t[name][1];
    console.log(el)
    var toout = "";
    if (which == "author") {
        toout = "<a href='" + t[name][0] + "'>" + auth + "</a>"
    } else {
        toout = "<a href='" + t[name][0] + "'>" + name + "</a>"
    }
    return toout;
}


function swapall(t) {
    var a = document.getElementsByClassName("swapme");
    var i;

    for (i = 0; i < a.length; i++) {
        try {


            var x = a[i];
            // x.style.color="red";
            var cont = x.innerHTML;
            var ct = t[cont];

            // t['term'] = [tit,bod,srcs,autit,useimg,imgloc,imgcapa,imgsrc,imgcapb]

            var TIT = ct[0];
            var BOD = ct[1];
            var SOURCELIST = ct[2];
            var AUTID = ct[3];
            var USEIMG = ct[4];
            var IMGLOC = ct[5];
            var IMGCAPA = ct[6];
            var IMGSRC = ct[7];
            var IMGCAPB = ct[8];

            var TERM = cont;
            if (ct[0] == "") {
                TIT = "Wormhole";
            } if (ct[1] == "") {
                BOD = "A wormhole (also known as Einstein–Rosen bridge) is a passage through spacetime creating shortcuts for long journeys across the universe.";
            } if (ct[2] == "") {
                SOURCELIST = [
                    "The Science of Interstellar",
                    "The Birth of Wormholes"
                ];
            } if (ct[3] == "") {
                AUTID = "title";
            } if (ct[4] == "") {
                USEIMG = false;
            } if (ct[5] == "") {
                IMGLOC = "'imgs/hole01.jpg'";
            } if (ct[6] == "") {
                IMGCAPA = "Image from: ";
            } if (ct[7] == "") {
                IMGSRC = "The Science of Interstellar";
            } if (ct[8] == "") {
                IMGCAPB = ".";
            }




            var l1 = "<span onclick='void(0);' class='tooltip'>";
            var l2 = "<span class='info'><span class='pronounce'>";
            var l3 = "</span><span class='text'>";
            var l3a = "</span>";
            var l4IMG = "<img class='def-img' style='width:inherit;height:auto;' src=";
            var l5IMG = "><span class='img-cap-span'>";
            var l5a = "</span>";
            var allIMG = "";
            if (USEIMG == true) {
                allIMG = l4IMG + IMGLOC + l5IMG + IMGCAPA + book(t, IMGSRC) + IMGCAPB + l5a;
            } else {
                allIMG = "";
            }
            var l6 = "<span class='bottom-span grid x-small'>";
            var SOURCESTEXT = "";
            var j;
            for (j = 0; j < SOURCELIST.length; j++) {
                SOURCESTEXT = SOURCESTEXT + book(t, SOURCELIST[j], AUTID);
            }
            var l7 = "</span></span></span>";

            console.log(SOURCESTEXT);

            // l1 + TERM + l2 + TIT + l3 + BOD + l3a + allIMG + l6 + SOURCESTEXT + l7

            var final = l1 + TERM + l2 + TIT + l3 + BOD + l3a + allIMG + l6 + SOURCESTEXT + l7;

            console.log(final);

            a[i].innerHTML = final;


            // console.log(cont);
        }
        catch (err) {
            console.log("error error error");
            a[i].innerHTML = "<p style='color:red;'>[FAILD TO RETREIVE DATA]</p>";
        }
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


function alt() {
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



