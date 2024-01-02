  model 1
  -converts a picture into a unique line. 

    new incoming target (line) comes in and comparing against other stored lines start...

    techniques 
    each technique together, helping label the incoming target 

  1. line matching. (exact matching) <-- unnneccessary but nice and can be done
     -compare how many points in a row match up between lines. also compare, each point with all points per line, between lines.
     -counts and seperated inter-lines taken into consideration for statistical reasoning. *
     -the more points that match the better, the more smaller lines that match the better
     -hint: seperate lines, use those lines as individual models
  2. use the min regression distance formula/s between lines, per each individual feature (per) <-- unnneccessary but nice and can be done
     -subtract feature points between lines, add and take the lowest value
     -the lowest value used for statistical reasoning. *
  3. compare the slope between points <-- neccessary and will show the true closeness of two lines
     -(same process as two) <-- except feature slopes
     -taking slopes per point, with all other points ahead  <-- comparing entire n^2 (slope subtraction) lines
  4. increasing and decreasing lines along the y axis, to compare to other lines <-- the above actually negates this. i think ill sticj with the above
     -this can be done before each deep comparison of lines

  rotating pixels within set to run model on. getting everything there.

  --how to put together

  -picture comes in 
  -unique line created per pixel 
  -one loop attaining
  -total matched points (including lines)
  -difference between slopes - returned 2 arrays, each with total set of differences, iterate over both, and compare each index. do many comparisons on this
  -THATS IT D. THATS MY FINAL ANSWER... for now

  ONE ALGORITHM --- DOUBLE LINE ALGORITHM N^2 slope algo

  //pushing all possible slope subtracted values to both arrays 

  let line1 = 'unique line 1';
  let line2 = 'unique line 2';

  let line_1_array = [];
  let line_2_array = [];

  for(let i = 0; i < line1.length; i++) { 
     let current_point = line1[i].y / line1[i].x; //rise over run
    for(let j = i + 1, j < line1.length; j++) {
     let new_point = line1[j].y/line1[j].x; 
      line_1_array.push(current_point - new_point);
    }
  }

  for(let i = 0; i < line2.length; i++) { 
     let current_point = line2[i].x / line2[i].y;
    for(let j = i + 1, j < line2.length; j++) {
      let new_point = line2[j].y/line2 [j].x; 
      line_2_array.push(current_point - new_point);
    }
  }
  
  //both arrays should be the same length by now
  //iterate over both, and subtract one from the other
  //this will compare every possible slope combination between both lines
  //which i think would be a nice way to define an incoming target

  let stored_slope_differences = []; 

  for(let i = 0; i < line_1_array.length; i++) { 
      stored_slope_differences.push(line_1_array[i] - line_2_array[i]); //after getting all differences per line, comparing those differences by subtracting, and storing
  }

  //after storing, run a variety of algorithms (minimim amount desired for addition algorithm however matches could be used here too...)

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

  //compares how many points are related per line
  function line_matching_points(incoming_line, stored_lines) {
    
  }

  //when a point is matched, store it as a similar line, and keep going until an off point <-- save the line <-- could do in above function (keeping seperate)
  function line_matching_inter_lines(incoming_line, stored_lines) {
    
  }
