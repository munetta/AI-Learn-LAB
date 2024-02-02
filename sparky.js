
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
let seperateRecursiveEnclosed = [];
let popIt = [];                                                                                                                                                                                                                       //loudaa
let levelsDeep = [];
let currentI; 
let currentJ;
let seperateBoxes = [];
let deviation = 100;  
let edgeColor = 'black';
let knownColors = {};
let loadedPictureLines = fetchLines();

/*
  creates a multi-dimensional array of the image to label edges ---> must set the image to an array beforehand
  THIS CAN INCOROPORTATE AN ALL BOXES PROCESS RIGHT HERE
*/

function turnImageIntoMultidimensionalArray() {
    for(let i = 0; i < image.length; i++) { 
        for(let j = i; j < image[i].length; j++) { 
            knownColors[image[i][j].color] = image[i][j].color;
            image[i][j] = { 
                color: image[i][j].color, 
                edge: false
            }
        }
    }
}
 
/*
    pushing the perimeter colors around the center pixel <--- if an unknown color is found, noted as the last outside perimeter (center pixel moves)

*/

function pushColor(color, i, j) { 

    perimeterColors.push({
        color: color,                                              
        i: i, 
        j: j, 
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
    outOfBounds = false;
}

/*
    labels all the edges and colors them over the image
*/

function labelEdges() { 
    for(let i = 0; i < perimeterColors.length; i++) {
        if(perimeterColors[i].color !== centerPixel.color) { 
            if(typeof(avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`]) === 'undefined') {
                edges.push({i: perimeterColors[i].i, j: perimeterColors[i].j});
                avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`] = true;
                image[perimeterColors[i].i][perimeterColors[i].j].edge = true;
            }
        }
    }
}

/*
    colors the edges a standard color. @param knownColors can be used for a rainbow function
*/

function colorEdges() { 
    for(let i = 0; i < edges.length; i++) { 
        image[edges[i].i][edges[i].j].color = edgeColor;
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
    graphs the image over a unique line --- this is how the images are stored in the database
    THIS IS MORE OF A CONVERSION FOR COMPARING
*/

function graph() { 
    for(let i = 0; i < image.length; i++) {
        for(let j = i; j < image[i].length; j++) { 
            if(image[i][j].edge) { 
                picturesUniqueLine.push(1);
           } else { 
                picturesUniqueLine.push(0);
           }
        }
    }
}

/*
    Takes the edges which are all connected, and stores each connected set in a multidimensional array (incorrect)
*/

function seperateConnectedLines() {

    function pushPoint() { 
        seperateRecursiveEnclosed[seperateRecursiveEnclosed.length - 1].push({ i: currentI, j: currentJ });
        seperateConnectedLines();
    }

    for(let i = 0; i < popIt.length; i++) { 

        let tempI = popIt[i].i; 
        let tempJ = popIt[i].j;
        let splicedI = false;

        if(tempJ === currentJ + 1 && tempI === currentI) {
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentJ += 1;
            levelsDeep += 1;
            pushPoint(); 
            currentJ -= 1; 
            levelsDeep -= 1;
        }

        if(tempJ === currentJ - 1 && tempI === currentI) {
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentJ -= 1; 
            levelsDeep += 1;
            pushPoint();
            currentJ += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ) {
            splicedI ? popIt.splice(i, 1) : '' 
            splicedI = true;
            currentI += 1; 
            levelsDeep += 1;
            pushPoint();
            currentI -= 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ) {
            splicedI ? popIt.splice(i, 1) : '' 
            splicedI = true;
            currentI -= 1; 
            levelsDeep += 1;
            pushPoint();
            currentI += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ - 1) { 
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentI -= 1; 
            currentJ -= 1;
            levelsDeep += 1;
            pushPoint();
            currentI += 1;
            currentJ += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ + 1) { 
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentI += 1; 
            currentJ += 1;
            levelsDeep += 1;
            pushPoint();
            currentI -= 1;
            currentJ -= 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ - 1) { 
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentI += 1; 
            currentJ -= 1;
            levelsDeep += 1;
            pushPoint();
            currentI -= 1;
            currentJ += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ + 1) { 
            splicedI ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentI -= 1; 
            currentJ += 1;
            levelsDeep += 1;
            pushPoint();
            currentI += 1;
            currentJ -= 1;
            levelsDeep -= 1;
        }
        
    }

    if(levelsDeep === 0 || popIt.length === 0) { 

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

}

/*
    runs the slope algorithm over all edges
*/

function distanceAlgorithm() {}

/*
    runs the match algorithm over the current frame and saved frames <--- object storage on image length nice here
*/

function matchAlgorithm() {
    let comparableArrays = [
        ...loadedPictureLines[picturesUniqueLine.length - 1]
    ];

    let medianKeyUpwardSearch = picturesUniqueLine.length - 1 + 1;
    let medianKeyDownwardSearch = picturesUniqueLine.length - 1 - 1;
    let untilDeviationMet = 0;

    function outwardSearchFromMedianKey() { 
        comparableArrays.push(...loadedPictureLines[medianKeyUpwardSearch]);
        comparableArrays.push(...loadedPictureLines[medianKeyDownwardSearch]);
        medianKeyUpwardSearch += 1; 
        medianKeyDownwardSearch -= 1;
        untilDeviationMet += 1;

        if(untilDeviationMet === deviation) { 
            return; 
        } else { 
            return outwardSearchFromMedianKey();
        }

    }

    outwardSearchFromMedianKey();

    let matches = 0

    for(let i = 0; i < comparableArrays.length; i++) {

    }   

}

/*
    iterating over image. identifying center pixel. INDEX
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
        standard match algorithm over a unique line <-- match algorithm
    */

    colorEdges();

    seperateBoxes();

    graph();

    matchAlgorithm();

    /*
        preparing to divide the image into many uniiqe lines (where to go from here) <-- distance algorithm
    */

    popIt = [...edges]; 

    currentI = popIt[0].i; 

    currentJ = popIt[0].j;

    popIt.splice(0, 1); 

    seperateRecursiveEnclosed.push([{ i: currentI, j: currentJ }]);

    seperateConnectedLines();

    distanceAlgorithm();

}

/*
    iterating around the center pixel <-- change allNull process location at bottom somewhere above
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

    let allNull = true;

    for(let i = 0; i < perimeterColors.length; i++) { 
        if(perimeterColors.color !== null) {
            allNull = false;
            break;
        } 
    }

    if(allNull) {
        return;
    }

    perimeterColors = [];

    return moveAroundPixelandDetectFirstChange();

}




