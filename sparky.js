
/*

  technique 1. create a unique line of grayish to black pixels (skip white pixels) --- must create black pixels 
  run n^2 algorithm
  store slopes
  compare to other arrays (you can do this wholistically or compare via each pixel in pixel slope object)
  not done
*/

let stored_unique_lines = fetch_array_of_stored_line_arrays();

let slope_arrays = convert_stored_line_arrays_to_slope_combinations(stored_lines); 

let pixel_slope_object = {};

let graph = [];

const image_length = 500;

for(let i = 0; i < image_length; i++) {
    graph[i] = []; 
    for(let j = 0; j < image_length; j++) {
        graph[i].push(0); 
    }
} 

let standard_y = Math.min(graph.length / 2); 

/*
    drawing on the outside of blocked color changes
    pushing this as the line
*/

let edges = {};

let diagonolPointDistance = 1;

let amountAround = 2;

let baseBlockColor = [];

let basePixelX; 

let basePixelY;

let image = null;

let foundUnknownColor = false;

function pushColor(color, key, x, y) { 
    baseBlockColor.push({
        color: color,                                              
        key: key, 
        x: x, 
        y: y
    });
}

function resetParameters() { 
    baseBlockColor = [];
    diagonolPointDistance = 1; 
    amountAround = 2; 
    keyAround = 1;
}

function checkUnknown() { 

}

function fetchPixelColor() { 
    
}

function outline() {

    image = fetch_image('file');

    for(let i = 0; i < image.length; i++) { 

        basePixelX = image[i].x; 
        basePixelY = image[i].y;

        let keyAround = 1; 

        pushColor(
            fetchPixelColor(image, basePixelX, basePixelY), 
            keyAround, 
            basePixelX, 
            basePixelY
        )

        keyAround += 1; 

        moveAroundPixelandDetectFirstChange();
        resetParameters();

    }

}

function moveAroundPixelandDetectFirstChange() {

    let iteritiveX = basePixelX - diagonolPointDistance; 
    let iteritiveY = basePixelY - diagonolPointDistance;

    push = () => { 
        pushColor(
            fetchPixelColor(image, iteritiveX, iteritiveY), 
            keyAround, 
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
    keyAround += 1;

    checkUnknown();

    return moveAroundPixelandDetectFirstChange();

}
