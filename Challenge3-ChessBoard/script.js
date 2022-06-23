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
            squre.setAttribute('position',String(i1)+String(j1));
            if(i1 % 2 == 0){
                if(j1 % 2 ==0){
                    squre.style.backgroundColor = 'white'
                }else{
                    squre.style.backgroundColor = 'black'
                }
            }else{
                if(j1 % 2 ==0){
                    squre.style.backgroundColor = 'black'
                }else{
                    squre.style.backgroundColor = 'white'
                }
            }
            boxLine.appendChild(squre);
        }
        grid.appendChild(boxLine);
        grid.addEventListener('click',onClick);
    }
    function onClick(event){
        const target = event.target;
        target.style.backgroundColor = 'red';
        const position = target.attributes.position.nodeValue.split('').map(x=>parseInt(x));
        let tempX,tempY,tempPosition,temp=0;
        for(let i2 = 1; i2 < cols; i2++){
            tempX = position[0]+i2;
            tempY = position[1]+i2;
            tempPosition = [tempX, tempY].join('');    
            temp = document.querySelector(`.squre[position="${tempPosition}"]`);
            temp.style.backgroundColor = "red";
            tempX = position[0]-i2;
            tempY = position[1]-i2;
            tempPosition = [tempX, tempY].join('');   
            temp = document.querySelector(`.squre[position="${tempPosition}"]`);
            temp.style.backgroundColor = 'red';
            tempX = position[0]+i2;
            tempY = position[1]-i2;
            tempPosition = [tempX, tempY].join('');   
            temp = document.querySelector(`.squre[position="${tempPosition}"]`);
            temp.style.backgroundColor = 'red';
            tempX = position[0]-i2;
            tempY = position[1]+i2;
            tempPosition = [tempX, tempY].join('');   
            temp = document.querySelector(`.squre[position="${tempPosition}"]`);
            temp.style.backgroundColor = 'red';
        }
    }
}

new PixelArt("#grid", 8, 8);