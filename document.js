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
