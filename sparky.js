
let avoidEdges = {};
let centerPixel = {};
let diagonolPointDistance = 1;
let amountAround = 2;
let perimeterColors = [];
let basePixelI = 0; 
let basePixelJ = 0;
let image = null;
let foundUnknownColor = false;
let picturesUniqueLine = []; //overall
let seperateArraysUniqueLines = []; //picture split up

/*
  creates a multi-dimensional array of the image
  color: color 
  edge: false
*/

function turnImageIntoMultidimensionalArray() {}
 
/*
    pushing the perimeter colors around the center pixel
*/

function pushColor(color, i, j) { 

    perimeterColors.push({
        color: color,                                              
        i: i, 
        j: j
    });

    if((perimeterColors[perimeterColors.length - 1].color !== centerPixel.color) && perimeterColors[perimeterColors.length - 1].color !== null) { 
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
    iterates the outside perimeter where there was a change, and paints the changes over the image
*/

function labelEdges() { 
    for(let i = 0; i < perimeterColors.length; i++) {
        if(perimeterColors[i].color !== centerPixel.color) { 
            if(typeof(avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`]) === 'undefined') {
                avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`] = true;
                image[perimeterColors[i].i][perimeterColors[i].j].color = 'black'; //find a unique color here. use object
                image[perimeterColors[i].i][perimeterColors[i].j].edge = true;
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
    graphs the image over a unique line. This is just a visual. 
    (can graph each seperate array)
*/

function graph() { 
    for(let i = 0; i < image.length; i++) {
       if(image[i].edge) { 
            picturesUniqueLine.push(1);
       } else { 
            picturesUniqueLine.push(0);
       }
    }
}

/*
    Takes the edges which are all connected, and stores them in a multidimensional array
    Each array can be seen as a unique picture within a larger picture
    avoids drawing many boxes
*/

function seperateArrays() {}

/*
    runs the algorithm over the current frame, and compares to other frames
*/

function distanceAlgorithm() {}

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

    seperateArrays(); 
    graph();
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

    amountAround += 2;
    
    diagonolPointDistance += 1;

    if(foundUnknownColor) {
        labelEdges();
        return;
    }

    perimeterColors = [];

    return moveAroundPixelandDetectFirstChange();

}

