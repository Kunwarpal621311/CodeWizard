function run(){
    const  htmlcode = document.getElementById("HTMLCODEAREA").value;
    const  htmlcode1 = document.getElementById("HTMLCODEAREA");
    const  csscode = document.getElementById("CSSCODEAREA").value;
    const  jscode = document.getElementById("JSCODEAREA").value;
    const output= document.getElementById("outputiframe");

    output.contentDocument.body.innerHTML = htmlcode + "<style>"+ csscode + "</style>";
    output.contentWindow.eval(jscode);  
}

const htmlmin = document.getElementById("htmlmin");
const htmlmax = document.getElementById("htmlmax");
const htmlmaxhight = document.getElementById("htmlmaxhight");
const cssmin = document.getElementById("cssmin");
const cssmax = document.getElementById("cssmax");
const cssmaxhight = document.getElementById("cssmaxhight");
const jsmin = document.getElementById("jsmin");
const jsmax = document.getElementById("jsmax");
const jsmaxhight = document.getElementById("jsmaxhight");
const htmlcodesection = document.getElementById("htmlcodesection");
const csscodesection = document.getElementById("csscodesection");
const jscodesection = document.getElementById("jscodesection");
const outputsection = document.getElementById("outputsection");
const outputmax = document.getElementById("outputmax");
const con = document.getElementById("con");
const left = document.getElementById("left");
const right = document.getElementById("right");
const normal = document.getElementById("outputnormal");

const footer =document.getElementById("footerbody");


htmlmin.addEventListener('click' ,()=>{

htmlcodesection.style.height = "7%"; 
csscodesection.style.height = "40%"; 
jscodesection.style.height = "40%"; 

});
htmlmax.addEventListener('click' ,()=>{

htmlcodesection.style.height = "80vh"; 
csscodesection.style.height = "10vh";
jscodesection.style.height= "10vh";
});
htmlmaxhight.addEventListener('click' ,()=>{

    htmlcodesection.style.height = "30%"; 
    csscodesection.style.height = "30%"; 
    jscodesection.style.height = "30%"; 
});



cssmin.addEventListener('click' ,()=>{

htmlcodesection.style.height = "40%"; 
csscodesection.style.height = "7%"; 
jscodesection.style.height = "40%"; 

});
cssmax.addEventListener('click' ,()=>{
htmlcodesection.style.height= "10vh";
csscodesection.style.height = "80vh";
jscodesection.style.height= "10vh";

});
cssmaxhight.addEventListener('click' ,()=>{

htmlcodesection.style.height = "30%"; 
csscodesection.style.height = "30%"; 
jscodesection.style.height = "30%"; 

});


jsmin.addEventListener('click' ,()=>{

htmlcodesection.style.height = "40%"; 
csscodesection.style.height = "40%"; 
jscodesection.style.height = "7%"; 

});
jsmax.addEventListener('click' ,()=>{
htmlcodesection.style.height= "10vh";
csscodesection.style.height = "10vh";
jscodesection.style.height= "80vh";

});
jsmaxhight.addEventListener('click' ,()=>{

htmlcodesection.style.height = "30%"; 
csscodesection.style.height = "30%"; 
jscodesection.style.height = "30%"; 

});

outputmax.addEventListener('click', ()=>{

    con.style.flexDirection = "column";
    left.style.width = "192vh";
    right.style.width = "192vh";
    left.style.flexDirection = "row";
    left.style.justifyContent = "space-evenly"
    htmlcodesection.style.width = "30%";
    htmlcodesection.style.height = "30vh";
    csscodesection.style.width = "30%";
    csscodesection.style.height = "30vh";
    jscodesection.style.width = "30%";
    jscodesection.style.height = "30vh";
    footer.style.marginTop = "50vh"
    
    
    
});
normal.addEventListener('click', ()=>{

    con.style.flexDirection = "row";
    left.style.width = "50%";
    right.style.width = "50%";
    left.style.flexDirection = "column";
// left.style.justifyContent = "space-evenly"
    htmlcodesection.style.width = "90%";
    htmlcodesection.style.height = "30vh";
    csscodesection.style.width = "90%";
    csscodesection.style.height = "30vh";
    jscodesection.style.width = "90%";
    jscodesection.style.height = "30vh";
    footer.style.marginTop = "20vh"

    
    
    
});


