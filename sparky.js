
let edges = [];
let avoidEdges = {};
let centerPixel = {};
let diagonolPointDistance = 1;
let amountAround = 2;
let perimeterColors = [];
let basePixelI = 0; 
let basePixelJ = 0;
let image = null;
let foundUnknownColor = false;
let picturesUniqueLine = []; 
// let seperateRecursiveEnclosed = [];
let seperateBoxes = [];

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
    colors the edges
*/

function labelEdges() { 
    for(let i = 0; i < perimeterColors.length; i++) {
        if(perimeterColors[i].color !== centerPixel.color) { 
            if(typeof(avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`]) === 'undefined') {
                edges.push({i: perimeterColors[i].i, j: perimeterColors[i].j});
                avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`] = true;
                image[perimeterColors[i].i][perimeterColors[i].j].color = 'black';
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
    probably not going to be used. but it can be. this would be a simple matching algorithm.
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
    -not all the way right i think
*/

let seperateRecursiveEnclosed = [];
let popIt = [];
let currentI; 
let currentJ;

function seperateConnectedLines() {

    function pushPoint() { 
        seperateRecursiveEnclosed[seperateRecursiveEnclosed.length - 1].push({ i: currentI, j: currentJ });
        seperateConnectedLines();
    }

    for(let i = 0; i < popIt.length; i++) { 

        //the point saved to avoid the splicing error
        let tempI = popIt[i].i; 
        let tempJ = popIt[i].j;

        if(tempJ === currentJ + 1 && tempI === currentI) { //right point found in the popIt array
            popIt.splice(i, 1); //deleting the right point, and setting it as the current
            currentJ += 1; //moving to the right point to process its surroundings (except for the one deleted)
            pushPoint(); //pushing the right point
            currentJ -= 1; //moving back left point to process other surrounding points
            //the left point is removed at this point.. and the right direction was already taken... tempI, and tempJ is the placeholder to be able to process every condition
        }

        if(tempJ === currentJ - 1 && tempI === currentI) { //note: if i splice, i will have to save the last point in a temp variable
            popIt.splice(i, 1); 
            currentJ -= 1; 
            pushPoint();
            currentJ += 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ) {
            popIt.splice(i, 1); 
            currentI += 1; 
            pushPoint();
            currentI -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ) {
            popIt.splice(i, 1); 
            currentI -= 1; 
            pushPoint();
            currentI += 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ - 1) { 
            popIt.splice(i, 1); 
            currentI -= 1; 
            currentJ -= 1;
            pushPoint();
            currentI += 1;
            currentJ += 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ + 1) { 
            popIt.splice(i, 1); 
            currentI += 1; 
            currentJ += 1;
            pushPoint();
            currentI -= 1;
            currentJ -= 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ - 1) { 
            popIt.splice(i, 1); 
            currentI -= 1; 
            currentJ -= 1;
            pushPoint();
            currentI += 1;
            currentJ += 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ + 1) { 
            popIt.splice(i, 1); 
            currentI -= 1; 
            currentJ += 1;
            pushPoint();
            currentI += 1;
            currentJ -= 1;
        }
        
    }

    if(popIt.length === 0) { 
        return;
    } 

    seperateRecursiveEnclosed.push([{ i: popIt[0].i, j: popIt[0].j }]);

    popIt.splice(0, 1); 

    if(popIt.length === 0) { 
        return;
    }

    return seperateConnectedLines();

}

/*
    runs the algorithm over all edges
    this only uses the edges of the image
    center point uses to get slopes between all edges. slopes then compared with each other. <-- this needs a center point formula
*/

function distanceAlgorithm() {}

/*
    runs the algorithm over the current frame, and compares to other frames
    uses the entire image
    just the closest match
    rotates image and checks every rotation -- not sure if woth if with edges
*/

function matchAlgorithm() {}

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

    /*
        pushing the first pixel beginning the first connected line 
    */

    popIt = [...edges]; //put all the edges in here
    currentI = popIt[0].i; 
    currentJ = popIt[0].j;
    popIt.splice(0, 1); //when pushing a point, 

    seperateRecursiveEnclosed.push([{ //push the first point of the first line. this is the beginning of the shape.  the point is removed once its pushed
        i: currentI, 
        j: currentJ
    }]);

    seperateConnectedLines(); 
    distanceAlgorithm();

    seperateBoxes();

    graph();
    matchAlgorithm();

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

