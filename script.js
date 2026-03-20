  // Properties that use "px" (numeric values)
  const pxProps = {
    "fs":  "font-size",
    "p":   "padding",
    "pt":  "padding-top",
    "pb":  "padding-bottom",
    "pl":  "padding-left",
    "pr":  "padding-right",
    "m":   "margin",
    "mt":  "margin-top",
    "mb":  "margin-bottom",
    "ml":  "margin-left",
    "mr":  "margin-right",
    "w":   "width",
    "h":   "height",
    "br":  "border-radius",
    "gap": "gap",
    "top": "top",
    "left": "left",
    "right": "right",
    "bottom": "bottom",
  };

  // Properties where value is used AS-IS (no px)
  const rawProps = {
    "bg":      "background-color",
    "text":    "color",
    "fw":      "font-weight",
    "display": "display",
    "pos":     "position",
    "overflow":"overflow",
    "cursor":  "cursor",
    "border":  "border",
    "ta": "text-align",
    "jc": "justify-content"

  };



  // console.log(allElements)

  function chaiTailwind(){
    const allElements = document.querySelectorAll("*");
    const classFound = new Set();
    allElements.forEach((el)=>{
      el.classList.forEach((cls)=>{
        if(cls.startsWith("chai-")){
          classFound.add(cls);
        }

      })
    })
    const cssRules = [];

    classFound.forEach((cls)=>{
    const rule = parseClass(cls);  
    if(rule) cssRules.push(rule);  
  })

    // parseClass()
    const style = document.createElement("style");
        style.id = ("chaiTailwindCss");
        style.textContent = cssRules.join("\n");
        document.head.appendChild(style);


  }



  function parseClass(cls){
    const raw = cls.replace(/^chai-/,"");
    const firstDash = raw.indexOf("-");
    const prop = raw.substring(0,firstDash);
    const value = raw.substring(firstDash+1);
    
    if(pxProps[prop]){
    return `.${cls} { ${pxProps[prop]}: ${value}px; }`
    }

    if(rawProps[prop]){
      let finalValue = value;
    if(/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(value)){
        finalValue = `#${value}`;
      }
        return `.${cls} { ${rawProps[prop]}: ${finalValue}; }`
        }

      return null 

  }

  document.addEventListener("DOMContentLoaded", chaiTailwind)


  // parseClass("chai-dis-fl")