  model 1
  -converts a picture into a unique line. 

  new incoming target (line) comes in and comparing against other stored lines start...

    techniques 
    each technique together, helping label the incoming target 

  1. line matching. 
    -compare how many points in a row match up between lines
    -counts and seperated inter-lines taken into consideration for statistical reasoning. *
    -the more points that match the better, the more smaller lines that match the better
    -hint: seperate lines, use those lines as individual models
  2. use the min regression distance formula/s between lines, per each individual feature
     -subtract feature points between lines, add and take the lowest value
     -the lowest value used for statistical reasoning. *
  3. compare the slope between points 
     -(same process as two) <-- exept feature slopes
     -look into taking slopes per point, with all other points ahead (doing something with that)
  4. increasing and decreasing lines along the y axis, to compare to other lines 
     -this can be done before each deep comparison of lines

  --how to put together

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
