function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)

    var style_element = document.getElementById("mainStyleSheet");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var current = style_element.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    var newhref = current === "style1.css" ? "style2.css" : "style1.css";
    // if (current == "light.css"){
    //     newhref = "dark.css";
    // }

    // else if (current == "dark.css"){
    //     newhref = "light.css";
    // }

   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style_element.setAttribute("href", newhref);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newhref);
  
}  


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    var saved = localStorage.getItem("stylesheet");
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleelement = document.getElementById("mainStyleSheet");
    // 2 (b) get html style element by ID
    
    // 2 (c) replace href attribute of html element.
    styleelement.setAttribute("href", saved);
}


