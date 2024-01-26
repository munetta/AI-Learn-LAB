
let avoidEdges = {};
let edges = [];
let centerPixel;
let diagonolPointDistance = 1;
let amountAround = 2;
let baseBlockColor = [];
let basePixelX; //could rid this and use center pixel
let basePixelY;
let image = null;

function pushColor(color, x, y) { 
    baseBlockColor.push({
        color: color,                                              
        x: x, 
        y: y
    });
}

function resetParameters() { 
    baseBlockColor = [];
    diagonolPointDistance = 1; 
    amountAround = 2; 
}

function checkUnknown() { 
    for(let i = 0; i < baseBlockColor.length; i++) {
        if(baseBlockColor[i].color !== centerPixel.color) {
            for(let j = i; j < baseBlockColor.length; j++) {
                if(baseBlockColor[j].color !== centerPixel.color) { 
                    if(typeof(avoidEdges[`${baseBlockColor[j].x}-${baseBlockColor[j].y}`]) === 'undefined') {
                        edges.push({ x: baseBlockColor[j].x, y: baseBlockColor[j].y })
                        avoidEdges[`${baseBlockColor[j].x}-${baseBlockColor[j].y}`] = true;
                    }
                }
            }
            break;
        }
    }
}

function fetchPixelColor(x, y) { 
    try {
        let img = image;
        //fetch images x,y color
    } catch(err) { 
        return 'out of bounds';
    }
}

function paintEdges() { 
    for(let i = 0; i < edges.length; i++) { 
        //paint edges
    }
} 

//this graphs the edges over a unique line that is compared to other unique lines
function graphEdges() { 

}

function outline() {

    image = fetch_image('file');

    for(let i = 0; i < image.length; i++) { 

        basePixelX = image[i].x; 
        basePixelY = image[i].y;

        centerPixel = {
            color: fetchPixelColor(basePixelX, basePixelY), 
            x: basePixelX, 
            y: basePixelY
        }

        moveAroundPixelandDetectFirstChange();
        resetParameters();

    }

    paintEdges();
    graphEdges();

}

function moveAroundPixelandDetectFirstChange() {

    let iteritiveX = basePixelX - diagonolPointDistance; 
    let iteritiveY = basePixelY - diagonolPointDistance;

    push = () => { 
        pushColor(
            fetchPixelColor(iteritiveX, iteritiveY), 
            iteritiveX, 
            iteritiveY
        );
    }

    push();

    for(let i = 0; i < amountAround; i++) { 
        iteritiveX += 1;
        push();
    }

    for(let i = 0; i < amountAround; i++) { 
        iteritiveY -= 1;
        push();
    }

    for(let i = 0; i < amountAround; i++) { 
        iteritiveX -= 1;
        push();
    }

    for(let i = 0; i < amountAround - 1; i++) {
        iteritiveY += 1;
        push();
    }

    amountAround += 1;

    diagonolPointDistance += 1;

    checkUnknown();

    baseBlockColor = [];

    return moveAroundPixelandDetectFirstChange();

}
