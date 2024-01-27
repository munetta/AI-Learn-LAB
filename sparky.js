
let avoidEdges = {};
let edges = [];
let centerPixel = {};
let diagonolPointDistance = 1;
let amountAround = 2;
let perimeterColors = [];
let basePixelI = 0; 
let basePixelJ = 0;
let image = null;
let foundUnknownColor = false;

function turnImageIntoMultidimensionalArray() {} //?

/*
    pushing the perimeter colors around the center pixel
*/

function pushColor(color, i, j) { 

    perimeterColors.push({
        color: color,                                              
        i: i, 
        j: j
    });

    if((perimeterColors[perimeterColors.length - 1] !== centerPixel.color) && perimeterColors[perimeterColors.length - 1] !== null) { 
        foundUnknownColor = true;
    }

}

/*
    moving to the next pixel, resetting
*/

function resetParameters() { 
    perimeterColors = [];
    diagonolPointDistance = 1; 
    amountAround = 2; 
    foundUnknownColor = false;
}

/*
    labels all edges based on center pixel which are different
*/

function labelEdges() { 
    for(let i = 0; i < perimeterColors.length; i++) {
        if(perimeterColors[i].color !== centerPixel.color) { 
            if(typeof(avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`]) === 'undefined') {
                edges.push({ i: perimeterColors[i].i, j: perimeterColors[i].j })
                avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`] = true;
            }
        }
    }
}

/*
    gets the color of the pixel
*/

function fetchPixelColor(i, j) {
    try {
        return image[i][j].color;
    } catch(err) { 
        return null;
    }
}

/*
    paints the outline
*/

function paintEdges() { 
    for(let i = 0; i < edges.length; i++) {
        image[edges[i].i][edges[i].j].color = 'black';
    }
} 

/*
    graphs the image over a unique line. algorithms are run over unique lines for closest comparisons. (closest line chosen)
*/

function graph() { 
    for(let i = 0; i < image.length; i++) {

    }
}

/*
    takes the edges which are all connected, and stores them in a multidimensional array
    each array can be seen as a unique picture within a larger picture
    avoids drawing the box over and over
*/

function seperateArrays() { 

}

/*
    runs the algorithm of the current frame into new frames 
*/

function distanceAlgorithm() {

}

/*
    iterating over image. identifying center pixel.
*/

function outline() {

    image = fetchImage('file');
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

    graph();

    seperateArrays(); 

    distanceAlgorithm(); 

}

/*
    iterating around the center pixel
*/

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

    amountAround *= 2;
    
    diagonolPointDistance += 1;

    if(foundUnknownColor) {
        labelEdges();
        return;
    }

    perimeterColors = [];

    return moveAroundPixelandDetectFirstChange();

}

