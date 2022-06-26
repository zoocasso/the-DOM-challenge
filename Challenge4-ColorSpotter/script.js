const getRandomColors = function(){
    var ratio = 0.618033988749895;
    
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}



function getRandomPosition(gridSize){
    let tempX = Math.floor(Math.random()*gridSize);
    let tempY = Math.floor(Math.random()*gridSize);
    return [tempX, tempY];
}


function onClick(event, randomPosition,grid){
    const target = event.target;
    const targetValue = target.attributes.position.value;
    if(randomPosition === targetValue){
        gridSize ++;
        scoreNum ++;
        grid.remove();
        const newGrid = document.createElement('div')
        newGrid.setAttribute('id','grid');
        document.body.appendChild(newGrid)
        new PixelArt("#grid", gridSize, scoreNum);
    }else{
        gridSize = 4;
        scoreNum = 1;
        grid.remove();
        const newGrid = document.createElement('div')
        newGrid.setAttribute('id','grid');
        document.body.appendChild(newGrid)
        new PixelArt("#grid", gridSize, scoreNum);
    }
}


function PixelArt(el, gridSize, scoreNum) {
    let temp = getRandomColors();
    let tempColor = temp.color;
    let tempOddColor = temp.oddColor;
    const score = document.querySelector("#score");
    score.innerHTML="score:"+ scoreNum;
    const grid = document.querySelector(el);
    for(let i1 = 0; i1 < gridSize; i1++){
        const boxLine = document.createElement('div');
        boxLine.setAttribute('class','boxLine');
        for(let j1 = 0; j1 < gridSize; j1++){
            const squre = document.createElement('div');
            squre.setAttribute('class','squre');
            squre.setAttribute('position',String(i1)+String(j1));
            squre.style.backgroundColor = tempColor;
            boxLine.appendChild(squre);
        }
        grid.appendChild(boxLine);
    }
    const randomNum = getRandomPosition(gridSize);
    const randomPosition = randomNum.join("");
    const randomSqure = document.querySelector(`.squre[position="${randomPosition}"]`);
    randomSqure.style.backgroundColor = tempOddColor;
    grid.addEventListener("click",(event) => onClick(event, randomPosition, grid));
}

let gridSize = 4;
let scoreNum = 1;
new PixelArt("#grid", gridSize, scoreNum);