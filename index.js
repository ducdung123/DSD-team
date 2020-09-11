function allthing() {
    document.getElementById("anh" + 1).src = "https://vietnam.travel/sites/default/files/styles/top_banner/public/2020-06/Banh%20mi%20in%20Vietnam.jpg?itok=R1uOIwdj"
    document.getElementById("anh" + 2).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-08/sustainable%20hotels%20vietnam_0.jpg?itok=ZPxVpWGa"
    document.getElementById("anh" + 3).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-08/Best%20responsible%20tours%20Vietam.jpg?itok=35mIosI6"
    document.getElementById("link-1").href = "food1/food1.html"
    document.getElementById("link-2").href = "nature1/nature1.html"
    document.getElementById("link-3").href = "culture1/culture1.html"
    document.getElementById("text1").innerHTML = "7 super banh mi to try in viet nam"
    document.getElementById("text2").innerHTML = "The best sustainable stays in VietNam"
    document.getElementById("text3").innerHTML = "Explore and embrace: Vietnam’s green tours"
    // for (var i = 1; i <= 3; i++) {
    //     var a = document.getElementById("anh" + i)
    //     a.src = "anhhanoi.jpg"

    // }
    for (var i = 1; i <= 5; i++) {
        if (i == 1) {
            document.getElementById("thing-" + i).classList.add("active")
            i++
        }

        document.getElementById("thing-" + i).classList.remove("add-click")
        document.getElementById("thing-" + i).classList.add("remove-click")

    }
    document.getElementById("thing-" + 1).classList.remove("remove-click")
    document.getElementById("thing-" + 1).classList.add("add-click")
    document.getElementById('res-thing').classList.remove("i-search1")
    document.getElementById('res-thing').classList.add("i-search2")
    document.getElementById("res-thing-box").innerHTML = "ALL"
}

function food() {
    document.getElementById("anh" + 1).src = "https://vietnam.travel/sites/default/files/styles/top_banner/public/2020-06/Banh%20mi%20in%20Vietnam.jpg?itok=R1uOIwdj"
    document.getElementById("anh" + 2).src = "https://vietnam.travel/sites/default/files/styles/top_banner/public/2020-05/Vietnamese%20food%20recipes-1.jpg?itok=-7Gqvq77"
    document.getElementById("anh" + 3).src = "https://vietnam.travel/sites/default/files/styles/top_banner/public/2020-01/best%20dishes%20HCMC.jpg?itok=X3nzExwU"
    document.getElementById("link-1").href = "food1/food1.html"
    document.getElementById("link-2").href = "food2/food2.html"
    document.getElementById("link-3").href = "food3/food3.html"
    document.getElementById("text1").innerHTML = "7 super banh mi to try in viet nam"
    document.getElementById("text2").innerHTML = "5 Vietnamese recipes to try at home"
    document.getElementById("text3").innerHTML = "Eating like a local in Ho Chi Minh City"
    // for(var i=1; i<=3; i++){
    //     var a = document.getElementById("anh"+i)
    //     if(a==1)
    //     a.src = "https://vietnam.travel/sites/default/files/styles/top_banner/public/2020-06/Banh%20mi%20in%20Vietnam.jpg?itok=R1uOIwdj" 

    // }
    // document.getElementById("thing-food").classList.remove("remove-click")
    // document.getElementById("thing-food").classList.add("add-click")
    // document.getElementById("thing-all").classList.remove("active")
    for (var i = 1; i <= 5; i++) {
        if (i == 1) {
            document.getElementById("thing-" + i).classList.remove("active")
        }

        document.getElementById("thing-" + i).classList.remove("add-click")
        document.getElementById("thing-" + i).classList.add("remove-click")

    }
    document.getElementById("thing-" + 2).classList.remove("remove-click")
    document.getElementById("thing-" + 2).classList.add("add-click")
    document.getElementById('res-thing').classList.remove("i-search1")
    document.getElementById('res-thing').classList.add("i-search2")
    document.getElementById("res-thing-box").innerHTML = "FOOD"
}
function nature() {
    document.getElementById("anh" + 1).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-08/sustainable%20hotels%20vietnam_0.jpg?itok=ZPxVpWGa"
    document.getElementById("anh" + 2).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-07/Hanoi%20daytrips.jpg?itok=qN5xh58E"
    document.getElementById("anh" + 3).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-03/Virtual%20Tours%20Vietnam-6.jpg?itok=NmEsSIie"
    document.getElementById("link-1").href = "nature1/nature1.html"
    document.getElementById("link-2").href = "nature2/nature2.html"
    document.getElementById("link-3").href = "nature3/nature3.html"
    document.getElementById("text1").innerHTML = "The best sustainable stays in VietNam"
    document.getElementById("text2").innerHTML = "5 day trip destinations from HaNoi"
    document.getElementById("text3").innerHTML = "Vietnam’s heritage sites in 360 degrees"
    // for (var i = 1; i <= 3; i++) {
    //     var a = document.getElementById("anh" + i)
    //     a.src = "anhdanang.jpg"

    // }
    // document.getElementById("thing-food").classList.remove("remove-click")
    // document.getElementById("thing-food").classList.add("add-click")
    // document.getElementById("thing-all").classList.remove("active")
    for (var i = 1; i <= 5; i++) {
        if (i == 1) {
            document.getElementById("thing-" + i).classList.remove("active")
        }

        document.getElementById("thing-" + i).classList.remove("add-click")
        document.getElementById("thing-" + i).classList.add("remove-click")

    }
    document.getElementById("thing-" + 3).classList.remove("remove-click")
    document.getElementById("thing-" + 3).classList.add("add-click")
    document.getElementById('res-thing').classList.remove("i-search1")
    document.getElementById('res-thing').classList.add("i-search2")
    document.getElementById("res-thing-box").innerHTML = "NATURE"
}
function culture() {
    document.getElementById("anh" + 1).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-08/Best%20responsible%20tours%20Vietam.jpg?itok=35mIosI6"
    document.getElementById("anh" + 2).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-07/towns%20of%20Mekong%20Delta-2.jpg?itok=LVDrDUPA"
    document.getElementById("anh" + 3).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2019-12/ben%20tre%20tour.jpg?itok=0GBkp8Bw"
    document.getElementById("link-1").href = "culture1/culture1.html"
    document.getElementById("link-2").href = "culture2/culture2.html"
    document.getElementById("link-3").href = "culture3/culture3.html"
    document.getElementById("text1").innerHTML = "Explore and embrace: Vietnam’s green tours"
    document.getElementById("text2").innerHTML = "5 unique towns in the Mekong Delta"
    document.getElementById("text3").innerHTML = "Day-tripping in the Mekong Delta"
    // for (var i = 1; i <= 3; i++) {
    //     var a = document.getElementById("anh" + i)
    //     a.src = "anhdanang.jpg"

    // }
    // document.getElementById("thing-food").classList.remove("remove-click")
    // document.getElementById("thing-food").classList.add("add-click")
    // document.getElementById("thing-all").classList.remove("active")
    for (var i = 1; i <= 5; i++) {
        if (i == 1) {
            document.getElementById("thing-" + i).classList.remove("active")
        }

        document.getElementById("thing-" + i).classList.remove("add-click")
        document.getElementById("thing-" + i).classList.add("remove-click")

    }
    document.getElementById("thing-" + 4).classList.remove("remove-click")
    document.getElementById("thing-" + 4).classList.add("add-click")
    document.getElementById('res-thing').classList.remove("i-search1")
    document.getElementById('res-thing').classList.add("i-search2")
    document.getElementById("res-thing-box").innerHTML = "CULTURE"
}
function city() {
    document.getElementById("anh" + 1).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2020-04/What%20to%20do%20in%20Dalat-10.jpg?itok=j9yJc_hL"
    document.getElementById("anh" + 2).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2018-12/top%20rooftop%20bars%20asia.jpg?itok=vxp4nWo0"
    document.getElementById("anh" + 3).src = "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2019-03/Cool%20souvenirs%20Vietnam%20Travel-2.jpg?itok=IRQrUTsh"
    document.getElementById("link-1").href = "city1/city1.html"
    document.getElementById("link-2").href = "city2/city2.html"
    document.getElementById("link-3").href = "city3/city3.html"
    document.getElementById("text1").innerHTML = "8 ways to appreciate Da Lat"
    document.getElementById("text2").innerHTML = "9 stunning rooftop bars"
    document.getElementById("text3").innerHTML = "10 cool collectibles buy VietNam"
    // for (var i = 1; i <= 3; i++) {
    //     var a = document.getElementById("anh" + i)
    //     a.src = "anhdanang.jpg"

    // }
    // document.getElementById("thing-food").classList.remove("remove-click")
    // document.getElementById("thing-food").classList.add("add-click")
    // document.getElementById("thing-all").classList.remove("active")
    for (var i = 1; i <= 5; i++) {
        if (i == 1) {
            document.getElementById("thing-" + i).classList.remove("active")
        }

        document.getElementById("thing-" + i).classList.remove("add-click")
        document.getElementById("thing-" + i).classList.add("remove-click")

    }
    document.getElementById("thing-" + 5).classList.remove("remove-click")
    document.getElementById("thing-" + 5).classList.add("add-click")
    document.getElementById('res-thing').classList.remove("i-search1")
    document.getElementById('res-thing').classList.add("i-search2")
    document.getElementById("res-thing-box").innerHTML = "CITY"
}
var a = document.getElementById("search")
function search() {
    // document.getElementById("i-search").classList.remove("i-search1")
    // console.log(1)
    document.getElementById("i-search").classList.add("i-search2")
    document.getElementById("nav-search").classList.remove("i-search2")
    document.getElementById("placepic").classList.remove("placepic1")
    document.getElementById("placepic").classList.add("placepic2")
    document.getElementById("thingpic").classList.remove("thingpic1")
    document.getElementById("thingpic").classList.add("thingpic2")

}
a.addEventListener('click', function () {
    var b = document.getElementById("search-value")
    // window.open("hanoi/hanoi.html", "_blank")
    if (b.value == "ha noi") {
        window.open("hanoi/hanoi.html", "_blank")
    }
    else if (b.value == "da nang") {
        window.open("danang/DaNang.html", "_blank")
    }
    else if (b.value == "ho chi minh") {
        window.open("hochiminh/hochiminhcity.html", "_blank")
    }
})
function submit() {
    // var a = document.getElementById("search-value");

    // console.log(${a.value})
    // window.open(a.nodeValue/a.nodeValue)
}
var x = document.getElementById("toggle");
var y = document.getElementById("res-nav");
var i = 0;
x.addEventListener('click', function () {
    if (i % 2 == 0) {
        y.classList.remove("remove-res-nav")
        y.classList.add("add-res-nav")
    }
    else {
        y.classList.remove("add-res-nav")
        y.classList.add("remove-res-nav")
    }
    i++;
})
var b = [0, 0]
var z = document.getElementById("res-pl-box")
var c = document.getElementById("res-th-box")
z.addEventListener("click", function () {
    if (b[0] % 2 == 0) {
        for (var q = 1; q <= 3; q++) {
            document.getElementById("res-pl-" + q).classList.remove("remove-res-nav")
            document.getElementById("res-pl-" + q).classList.add("add-res-nav")
            z.classList.add("add-res-box")
        }
    }
    else {
        for (var q = 1; q <= 3; q++) {
            document.getElementById("res-pl-" + q).classList.remove("add-res-nav")
            document.getElementById("res-pl-" + q).classList.add("remove-res-nav")
            z.classList.remove("add-res-box")
        }
    }
    b[0]++
})
c.addEventListener("click", function () {
    if (b[1] % 2 == 0) {
        for (var q = 1; q <= 4; q++) {
            document.getElementById("res-th-" + q).classList.remove("remove-res-nav")
            document.getElementById("res-th-" + q).classList.add("add-res-nav")
            c.classList.add("add-res-box")
        }
    }
    else {
        for (var q = 1; q <= 4; q++) {
            document.getElementById("res-th-" + q).classList.remove("add-res-nav")
            document.getElementById("res-th-" + q).classList.add("remove-res-nav")
            c.classList.remove("add-res-box")
        }
    }
    b[1]++
})
i = 0;
var resthing = document.getElementById("res-thing-box")
resthing.addEventListener('click', function () {
    // console.log(1)
    // document.getElementById('res-thing').classList.remove("remove-res-thing")
    // document.getElementById('res-thing').classList.add("add-res-thing")

    if (i % 2 == 0) {
        document.getElementById('res-thing').classList.remove("i-search2")
        document.getElementById('res-thing').classList.add("i-search1")
    }
    else {
        document.getElementById('res-thing').classList.remove("i-search1")
        document.getElementById('res-thing').classList.add("i-search2")
    }
    i++;
})
console.log(typeof[18,8,2010])