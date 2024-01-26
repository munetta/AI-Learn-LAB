
/*
    drawing on the outside of blocked color changes
*/

let edges = [];
let centerPixel;
let diagonolPointDistance = 1;
let amountAround = 2;
let baseBlockColor = [];
let basePixelX; 
let basePixelY;
let image = null;

function pushColor(color, key, x, y) { 
    baseBlockColor.push({
        color: color,                                              
        key: key, 
        x: x, 
        y: y
    });
}

function resetParameters() { 
    baseBlockColor = []; //this is resetting every time around
    diagonolPointDistance = 1; 
    amountAround = 2; 
    keyAround = 1;
}

function checkUnknown() { 
    for(let i = 0; i < baseBlockColor.length; i++) {
        if(baseBlockColor[i].color !== centerPixel.color) {
            for(let j = i; j < baseBlockColor.length; j++) {
                if(baseBlockColor[j].color !== centerPixel.color) { 
                    edges.push({ 
                        x: baseBlockColor[j].x, 
                        y: baseBlockColor[j].y 
                    })
                }
            }
            break;
        }
    }
}

function fetchPixelColor(x, y) { 
    let img = image;
    //fetch x,y's color
}

function paintEdges() { 
    for(let i = 0; i < edges.length; i++) { 
        //paint edges
    }
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
