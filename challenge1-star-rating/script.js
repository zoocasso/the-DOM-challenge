/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
	const element = document.querySelector(el);
	const fragment = document.createDocumentFragment();
  for(i=1;i<=count;i++){
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-star-o");
    icon.setAttribute("countingStar", i);
    fragment.appendChild(icon);
  }
  element.appendChild(fragment);
  element.addEventListener("mouseover", onMouseOver);
  element.addEventListener("click", onClick);

  function onMouseOver(event){
    const target = event.target
    const countingStar = event.target.getAttribute("countingStar");
    const elementLength = element.childElementCount;
    for(i=0;i<countingStar;i++){
      element.children[i].classList.remove("fa-star-o");
      element.children[i].classList.add("fa-star");  
    }
    for(i=countingStar;i<elementLength;i++){
      element.children[i].classList.remove("fa-star");
      element.children[i].classList.add("fa-star-o");  
    }
  }

  function onClick(event){
    const target = event.target
    const countingStar = event.target.getAttribute("countingStar");
    const text = document.querySelector("#display-star");
    text.innerHTML=countingStar;
  }
}
function getStar(value){
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);