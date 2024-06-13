document.addEventListener("DOMContentLoaded", ()=> {
                
    let list = ["Select"];
    let bmi = document.getElementById("BMI");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let result = document.getElementById("result");
    let refresh = document.getElementById("refresh");
    let heightBar = document.getElementById("heightBar");
    let weightBar = document.getElementById("weightBar");
    let ageList = document.getElementById("ageList");
    let age_display = document.getElementById("age_display");
    let txtHeight = document.getElementById("txtHeight");
    let txtWeight = document.getElementById("txtWeight");
    let res = document.querySelector("h3");
    let textResult = document.getElementById("textResult");
    let height = 0;
    let weight = 0;
    
    for(let i=6; i<60; i++)
    {
        list.push(i);
    };
    function toggle(element1, element2) {
        // console.log(element1, element2);
    //    element1.classList.add("selected");
    //     element2.classList.remove("selected"); 
        element1.style.boxShadow = "2px 2px 4px blue";
        element2.style.boxShadow = "2px 2px 4px black";
    }
    male.addEventListener("click", ()=>{
        // male.style.cssText = "box-shadow: 0px;";

        toggle(male, female);
    });
    female.addEventListener("click", ()=>{
        // female.style.cssText = "box-shadow: 0px;";

        toggle(female, male);
    });

    list.forEach((element,index)=>{
        let option = document.createElement("option");
        option.textContent = element;
        option.style.cssText = "font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;"
        option.value = element;
        ageList.appendChild(option)
    });

    heightBar.addEventListener("input",()=>{
        txtHeight.value = heightBar.value;
        height = parseFloat(txtHeight.value) / 100;
    });
    weightBar.addEventListener("input",()=>{
        txtWeight.value = weightBar.value;
        weight = parseFloat(txtWeight.value);
    });
    ageList.addEventListener("input",()=>{
        age_display.value = ageList.value;
    })

    bmi.addEventListener("click", funct_result);
    function funct_result() {
        res.innerHTML = (weight/(height*height)).toFixed(2) + " Kg/m<sup>2<sup>";
        let resT = parseInt(res.textContent); 
        console.log(resT);
        if(resT < 18.5){
            textResult.textContent = "(Under weight)";
        }
        else if(resT > 18.5 || resT < 24.9)
        {
            textResult.textContent = "(Healthy weight)";
        }
        else if(resT > 25.0  || resT < 29.9)
        {
            textResult.textContent = "(Over weight)";
        }
        else if(resT > 30){
            textResult.textContent = "(Obesity)";
        }
        else{
            res.textContent = "Please enter height and weight";
            textResult.textContent = "";
        }
        result.style.visibility = "visible";
        // result.classList.toggle("result-active");
    }
    refresh.addEventListener("click",()=>{
        heightBar.value = 100;
        txtHeight.value = null;
        weightBar.value = 50;
        txtWeight.value = null;
        height = 0;
        weight = 0;
        male.style.boxShadow = "2px 2px 4px black";
        female.style.boxShadow = "2px 2px 4px black";
        // male.style.cssText = "box-shadow: 2px 2px 4px;";
        // female.style.cssText = "box-shadow: 2px 2px 4px;";
        result.style.visibility = "hidden";
    });
});