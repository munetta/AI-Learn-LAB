
/*
    The image to work on and other stored images to compare to
    boxes is all combinations of single image
*/

let image = null;
let picturesUniqueLine = []; 
let loadedPictureLines = fetchLines();
let boxes = [];
let iteritiveBoxAmountLength;
let iteritiveBoxAmountHeight;
let edges = [];
let avoidEdges = {};

/*
    @function moveAroundPixelandDetectFirstChange
*/

let centerPixel = {};
let diagonolPointDistance = 1;
let amountAround = 2;
let perimeterColors = [];
let foundUnknownColor = false;

/*
    @function seperateConnectedLines
*/

let seperateRecursiveEnclosed = [];
let popIt = [];                                                                                                                                                                                                                       //loudaa
let levelsDeep = 0;
let currentI; 
let currentJ;

/*
    users input
*/

let deviation = 5;  
let edgeColor = 'black';
let acceptedColors = new Set(['blue', 'red']);
let labelName = 'Alex';
let savePicture = false;
let standardBoxSize = 0.10;

/*
    creates a multi-dimensional array of all the boxes -- standard way (dividing) --- other way is kind of like a splash
*/

function drawBoxes() {}

/*
    creates a multi-dimensional array of the image to label edges --- will do after
*/

function turnImageIntoMultidimensionalArray() {
    for(let i = 0; i < image.length; i++) { 
        for(let j = 0; j < image[i].length; j++) { 
            acceptedColors.delete(image[i][j].color);
            image[i][j] = { 
                color: image[i][j].color, 
                edge: false
            }
        }
    }

    edgeColor = [...acceptedColors][0] || edgeColor;

}
 
/*
    pushing the perimeter colors around the center pixel 
    if an unknown color is found, noted as the last outside perimeter (center pixel moves)
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
}

/*
    labels all the edges and colors them over the image (center pixel can be compounded <--- must ignore lighting <--- set a range)
*/

function labelEdges() { 
    for(let i = 0; i < perimeterColors.length; i++) {
        if(perimeterColors[i].color !== centerPixel.color) { 
            if(typeof(avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`]) === 'undefined') {
                edges.push({i: perimeterColors[i].i, j: perimeterColors[i].j});
                avoidEdges[`${perimeterColors[i].i}-${perimeterColors[i].j}`] = true;
                image[perimeterColors[i].i][perimeterColors[i].j].edge = true;
                document.querySelector(`#${perimeterColors[i].i}-${perimeterColors[i].j}`).backgroundColor = edgeColor;
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
    graphs the image over a unique line
    unique line used to compare against others
    the first picture in drawBoxes is the entire picture...
*/

function graphConversion() { 
    for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < image[i].length; j++) { 
            if(image[i][j].edge) { 
                picturesUniqueLine.push(1);
           } else { 
                picturesUniqueLine.push(0);
           }
        }
    }

    boxes.push([...picturesUniqueLine])

}

/*
    divides the image into a set of connected edges (will use later)
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
            splicedI === false ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentJ += 1;
            levelsDeep += 1;
            pushPoint(); 
            currentJ -= 1; 
            levelsDeep -= 1;
        }

        if(tempJ === currentJ - 1 && tempI === currentI) {
            splicedI === false ? popIt.splice(i, 1) : ''
            splicedI = true;
            currentJ -= 1; 
            levelsDeep += 1;
            pushPoint();
            currentJ += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI + 1 && tempJ === currentJ) {
            splicedI === false ? popIt.splice(i, 1) : '' 
            splicedI = true;
            currentI += 1; 
            levelsDeep += 1;
            pushPoint();
            currentI -= 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ) {
            splicedI === false ? popIt.splice(i, 1) : '' 
            splicedI = true;
            currentI -= 1; 
            levelsDeep += 1;
            pushPoint();
            currentI += 1;
            levelsDeep -= 1;
        }

        if(tempI === currentI - 1 && tempJ === currentJ - 1) { 
            splicedI === false ? popIt.splice(i, 1) : ''
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
            splicedI === false ? popIt.splice(i, 1) : ''
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
            splicedI === false ? popIt.splice(i, 1) : ''
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
            splicedI === false ? popIt.splice(i, 1) : ''
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
    pixel key = i-j-amount-of-atachments ---> array of all the distaces to the other pixels (89 89 89 21 33 32) or ([-3, 5], [6,8])
    ex 1 all directions: i-j-122: [[12,33,23], ...]
    ex 2 each direction: i-j-221: [[[-5, 6], [2,3]], ...] ... count most matches within the array... subtract omst similar values... each pixel line should have an array of images attached. count most frequent. return.
*/

function distanceAlgorithm() {
    let uniqueImageCount = {};
}

/*
    compares the unique line @picturesUniqueLine to other lines stored of the same or similar length <--- pass in the box parameter here... in loop... just to store all the images
*/

function matchAlgorithm() {
    let comparableArrays = [
        [...loadedPictureLines[picturesUniqueLine.length - 1]]
    ];

    let medianKeyUpwardSearch = picturesUniqueLine.length - 1 + 1;
    let medianKeyDownwardSearch = picturesUniqueLine.length - 1 - 1;
    let untilDeviationMet = 0;

    function outwardSearchFromMiddleKey() { 
        comparableArrays.push([...loadedPictureLines[medianKeyUpwardSearch]]);
        comparableArrays.push([...loadedPictureLines[medianKeyDownwardSearch]]);
        medianKeyUpwardSearch += 1; 
        medianKeyDownwardSearch -= 1;
        untilDeviationMet += 1;

        if(untilDeviationMet === deviation) { 
            return; 
        } else { 
            return outwardSearchFromMiddleKey();
        }

    }

    outwardSearchFromMiddleKey();

    let updateMostMatches = 0; 
    let databasePictureName = 'undefined';

    for(let i = 0; i < comparableArrays.length; i++) {

        for(let j = 0; j < comparableArrays[i].length; j++) { 

            let matches = 0;

            for(let k = 0; k < comparableArrays[i][j].length; k++) { 
                if((comparableArrays[i][j][k] === 1 && picturesUniqueLine[k] === 1) || (comparableArrays[i][j][k] === 0 && picturesUniqueLine[k] === 0)) { 
                    matches += 1;
                }
            }

            if(matches > updateMostMatches) { 
                updateMostMatches = matches;
                databasePictureName = comparableArrays[i][j][comparableArrays[i][j].length - 1];
            }

        }

    }

    /*
        found the image most closely related 
        save it if enough data is present to trust saving --- if not... labeling stage
    */

    if(savePicture) {
        axios.post({ 
            picturesUniqueLine: [...picturesUniqueLine, labelName ? labelName : databasePictureName],
            key: picturesUniqueLine.length - 1
        });
    }

    return labelName ? labelName : databasePictureName;

}

/*
    START FUNCTION
    outlining image
*/

function outline() {

    image = fetchImage('file');
    turnImageIntoMultidimensionalArray();

    iteritiveBoxAmountLength = image[0].length * standardBoxSize;
    iteritiveBoxAmountHeight = image.length * standardBoxSize;

    for(let i = 0; i < image.length; i++) {

        for(let j = 0; j < image[i].length; j++) { 

            centerPixel = {
                color: fetchPixelColor(i, j), 
                i: i, 
                j: j
            }

            moveAroundPixelandDetectFirstChange();
            resetParameters();

        }

    }

    /*
        push the original image to boxes
    */

    graphConversion();

    /*
        split up the image into boxes here and run a loop over each box --- will do later
    */

    drawBoxes();

    /*
        match algorithm --- this is run in a loop... where the pictures unique line is to start
    */

    for(let i = 0; i < boxes.length; i++) {
        matchAlgorithm([...boxes[i]]);
    }

    /*
      runs a distance algorithm across all edges to other edges... 
    */

    distanceAlgorithm();

    /*
        function to seperate lines (will use later <-- numbers and letters maybe)
    */

    popIt = [...edges]; 

    currentI = popIt[0].i; 

    currentJ = popIt[0].j;

    popIt.splice(0, 1); 

    seperateRecursiveEnclosed.push([{ i: currentI, j: currentJ }]);

    seperateConnectedLines(); 

}

/*
    iterating around the center pixel
*/

function moveAroundPixelandDetectFirstChange() {

    let iteritiveI = centerPixel.i - diagonolPointDistance; 
    let iteritiveJ = centerPixel.j - diagonolPointDistance;

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

/*
    users input
*/

document.querySelector('#updateLabelNameButton').onclick = function() { 
    labelName = document.querySelector('#labelName').value;
}

document.querySelector('#updateDefaultEdgeColorButton').onclick = function() { 
    edgeColor = document.querySelector('#edgeColor').value;
}

document.querySelector('#addAnAcceptedEdgeColorButton').onclick = function() { 
    try {
        acceptedColors = new Set ([...document.querySelector('#edgeColors').value.trim().split(',')]);
    } catch(err) { 
        console.log('make sure colors are calma seperated')
    }
}

document.querySelector('#updateDeviationButton').onclick = function() { 
    deviation = document.querySelector('#deviation').value;
}

document.querySelector('#savePictureButton').onclick = function() { 
    savePicture = document.querySelector('#savePicture').value;
}

