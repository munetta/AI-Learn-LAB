  this is a picture model written in javascript. This is not the original iterate over and plot per pixel. That is not edge determinent (more accurate). The 'edge' algorithm finds a black pixel, then recursively looks for attached black pixels. This helps denote shapes of objects which can be plotted nicely with lines. <-- opinion

  step 1. convert picture to black and white
  step 2. iterate over picture and when run into a black color, all the way black, multiply its x and y value and plot 
  step 3. move the line cursor + 1 to denote the next point in the unique line. The iteration pattern denotes the unique line. Being it is always the same.. 
  step 4. save the line, and label it with an employee like myself. 
  leaving a space between white values on the axis means many lines will be measured to denote uniqueness. x+1

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

  this is a model in javascript 
  
    
  }

  this model uses the other approach, which is plotting a line by every pixel denoted on a black and white scale
  ...

  this is a model that denotes all colors, with a number... 
  ...  


