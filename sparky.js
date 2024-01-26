
let avoidEdges = {};
let edges = [];
let centerPixel;
let diagonolPointDistance = 1;
let amountAround = 2;
let baseBlockColor = [];
let basePixelI; 
let basePixelJ;
let image = null;

function turnImageIntoMultidimensionalArray() { }

function pushColor(color, down, over) { 
    baseBlockColor.push({
        color: color,                                              
        i: down, 
        j: over
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
                    if(typeof(avoidEdges[`${baseBlockColor[j].i}-${baseBlockColor[j].j}`]) === 'undefined') {
                        edges.push({ i: baseBlockColor[j].i, j: baseBlockColor[j].j })
                        avoidEdges[`${baseBlockColor[j].i}-${baseBlockColor[j].j}`] = true;
                    }
                }
            }
            break;
        }
    }
}

function fetchPixelColor(i, j) {
    try {
        let img = image;
    } catch(err) { 
        console.log('out of bounds');
    }
}

function paintEdges() { 
    for(let i = 0; i < edges.length; i++) {}
} 

function graphEdges() {
    for(let i = 0; i < edges.length; i++) {}
}

function outline() {

    image = fetch_image('file');
    turnImageIntoMultidimensionalArray();

    for(let i = 0; i < image.length; i++) {

        for(let j = i; j < image[i].length; j++) { 

            basePixelI = i;
            basePixelJ = j;

            centerPixel = {
                color: fetchPixelColor(basePixelI, basePixelJ), 
                i: basePixelI, 
                j: basePixelJ
            }

            moveAroundPixelandDetectFirstChange();
            resetParameters();

        }

    }

    paintEdges();
    graphEdges();

}

function moveAroundPixelandDetectFirstChange() {

    let iteritiveI = basePixelI - diagonolPointDistance; 
    let iteritiveJ = basePixelJ - diagonolPointDistance;

    push = () => { 
        pushColor(
            fetchPixelColor(iteritiveI, iteritiveJ), 
            iteritiveI, 
            iteritiveJ
        );
    }

    push();

    for(let i = 0; i < amountAround; i++) { 
        iteritiveJ += 1;
        push();
    }

    for(let i = 0; i < amountAround; i++) { 
        iteritiveI -= 1;
        push();
    }

    for(let i = 0; i < amountAround; i++) { 
        iteritiveJ -= 1;
        push();
    }

    for(let i = 0; i < amountAround - 1; i++) {
        iteritiveI += 1;
        push();
    }

    amountAround += 1;

    diagonolPointDistance += 1;

    checkUnknown();

    baseBlockColor = [];

    return moveAroundPixelandDetectFirstChange();

}
