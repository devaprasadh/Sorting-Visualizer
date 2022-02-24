

// Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;

var inp_as = document.getElementById("a_size"), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butt_algos = document.querySelectorAll(".algos a");
var content = document.getElementById("array_container");
content.style = "flex-direction:row";

var divs = [];
var div_sizes = [];
var margin_size;
var b_case = document.getElementById("info_b");
var a_case = document.getElementById("info_a");
var w_case = document.getElementById("info_w");
var space_com = document.getElementById("info_s");
var header = document.getElementById("head")


inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array(){
    content.innerHTML = '';

    for(var i = 0;i<array_size;i++){
        div_sizes[i] = Math.floor(Math.random() * 0.5 *(inp_as.max - inp_as.min) ) + 10;
        divs[i] = document.createElement("div");
        content.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    }


function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}    
window.onload = update_array_size();

for (var i = 0; i < butt_algos.length; i++) {
    butt_algos[i].addEventListener("click",run_algo);
    
}

function disable_buttons(){
    for(var i = 0; i < butt_algos.length;i++ ){
        // butt_algos[i].classList = [];
        // butt_algos[i].classList.add("butt_locked");
        butt_algos[i].style.pointerEvents="none";
        inp_as.disabled = true;
        inp_aspeed.disabled = true;
        inp_gen.disabled = true;
        
    }
    
    
}


function run_algo(){
    // alert("there")
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                    break;
        case "Selection":Selection_sort();
                    break;
        case "Insertion":Insertion();
                    break;
        case "Merge":Merge();
                    break;
        case "Quick":Quick();
                    break;
        case "Heap":Heap();
                    break;
        case "Tim" : Tim();
                    break;            
    }
    

}









