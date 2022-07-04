/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
function PixelArt(el, rows, cols) {
    const grid = document.querySelector(el);
    for(let i1 = 0; i1 < cols; i1++){
        const boxLine = document.createElement('div');
        boxLine.setAttribute('class','boxLine');
        for(let j1 = 0; j1 < rows; j1++){
            const squre = document.createElement('div');
            squre.setAttribute('class','squre');
            squre.setAttribute('draggable','true');
            boxLine.appendChild(squre);
        }
        grid.appendChild(boxLine);
    }
    const boxLine = document.createElement('div');
    boxLine.setAttribute('class','boxLine');
    for(let j1 = 0; j1 < rows; j1++){
        const squre = document.createElement('div');
        squre.setAttribute('class','squre');
        squre.setAttribute('id','palette'+j1);
        boxLine.appendChild(squre);
    }
    grid.appendChild(boxLine);
    grid.addEventListener("click",onClick);
    grid.addEventListener("dragstart",onDragstart);
    grid.addEventListener("dragenter",onDragenter);

    function onClick(event){
        const target = event.target;
        if(target.className == 'squre'){
            target.style.backgroundColor = 'black';    
        }
    }
    
    function onDragstart(event){
        const target = event.target;
        if(target.className == 'squre'){
            target.style.backgroundColor= 'gray';
        }
    }
    
    function onDragenter(event){
        const target = event.target;
        if(target.className == 'squre'){
            target.style.backgroundColor= 'gray';
        }
    }
}

new PixelArt("#grid", 10, 10);