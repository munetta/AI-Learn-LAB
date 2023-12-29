  this is a picture model written in javascript. This is not the original iterate over and plot per pixel. That is not edge determinent (more accurate). The 'edge' algorithm finds a black pixel, then recursively looks for attached black pixels. This helps denote shapes of objects which can be plotted nicely with lines. <-- opinion

  step 1. convert picture to black and white
  step 2. iterate over picture and when run into a black color, all the way black, multiply its x and y value and plot 
  step 3. move the line cursor + 1 to denote the next point in the unique line. The iteration pattern denotes the unique line. Being it is always the same.. 
  step 4. save the line, and label it with an employee like myself. 

  goal 
  accurately denote a picture using a line drawn across a graph (label the line) (convert the line to a unique point and comare how easy it is to compare incoming targets)

  let graph = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  let picture = 'path-to-image.jpg'; 

  let x = 0; 
  let pixel_location_differential = 2;

  for(let i = 0; i  picture.length; i++) {
    
  }
    
  }
  


