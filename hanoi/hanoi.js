function overview(){
    for(var i=1; i<=4; i++){
        document.getElementById("nav"+i).classList.remove("navadd")
        document.getElementById("nav"+i).classList.add("navremove")
    }
    document.getElementById("nav1").classList.remove("navremove")
    document.getElementById("nav1").classList.add("navadd")
}
function gallery(){
    for(var i=1; i<=4; i++){
        if(i==1){
            document.getElementById("nav"+i).classList.remove("active");
        }
        document.getElementById("nav"+i).classList.remove("navadd")
        document.getElementById("nav"+i).classList.add("navremove")
    }
    document.getElementById("nav2").classList.remove("navremove")
    document.getElementById("nav2").classList.add("navadd")

}
function alsolike(){
    for(var i=1; i<=4; i++){
        if(i==1){
            document.getElementById("nav"+i).classList.remove("active");
            
        }
        document.getElementById("nav"+i).classList.remove("navadd")
        document.getElementById("nav"+i).classList.add("navremove")
    }
    document.getElementById("nav3").classList.remove("navremove")
    document.getElementById("nav3").classList.add("navadd")

}
function nearplace(){
    for(var i=1; i<=4; i++){
        if(i==1){
            document.getElementById("nav"+i).classList.remove("active");
            
        }
        document.getElementById("nav"+i).classList.remove("navadd")
        document.getElementById("nav"+i).classList.add("navremove")
    }
    document.getElementById("nav4").classList.remove("navremove")
    document.getElementById("nav4").classList.add("navadd")

}