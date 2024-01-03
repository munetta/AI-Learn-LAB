    model 1
   -my perspective of a picture model algorithm
   -converts a picture into a unique line. 

    new incoming target (line) comes in and comparing against other stored lines starts...

    techniques 
  1. line matching. (exact matching) <-- unnneccessary but nice
     -compare how many points in a row match up between lines. 
     -counts and seperated inter-lines taken into consideration for statistical reasoning. *
     -the more points that match the better, the more smaller lines that match the better
     -hint: seperate lines, use those lines as individual models
  2. use the min regression distance formula between lines, per each individual feature <-- unnneccessary but nice
     -subtract feature points between lines, add and take the lowest value
     -the lowest value used for statistical reasoning. *
  3. compare every combinational slope between lines <-- neccessary and will show the true closeness of two lines
     -(same process as two) <-- except feature slopes
     -taking all combinations of slopes within a unique line. comparing the returned array against other lines sloped arrays. getting min. <-- creating an array of slopes (in n^2)
     -algorithm run on the outline of blackish pixels, each black pixel, denoted, as x*y, anything else, and the line continues without a plot. (most accurate for now)
  4. increasing and decreasing lines along the y axis, to compare to other lines
     -3 negates this
     -this can be done before each deep comparison of lines maybe
  5. rotating pixels within set to run model on. getting everything there.
     -3 negates this i think

  //pushing all possible slope subtracted values to both arrays 

  let line1 = 'unique line 1';
  let line2 = 'unique line 2';

  let line_1_array = [];
  let line_2_array = [];

  //this is an incoming target combinational slope array
  for(let i = 0; i < line1.length; i++) { 
     let current_point = line1[i].y / line1[i].x; //rise over run
    for(let j = i + 1, j < line1.length; j++) {
     let new_point = line1[j].y/line1[j].x; 
      line_1_array.push(current_point - new_point);
    }
  }

  //line 2 is stored, think of all stored lines having an array of slopes to prepare for comparing
  for(let i = 0; i < line2.length; i++) {
     let current_point = line2[i].x / line2[i].y;
    for(let j = i + 1, j < line2.length; j++) {
      let new_point = line2[j].y/line2 [j].x; 
      line_2_array.push(current_point - new_point);
    }
  }
  
  //both arrays should be the same length by now (goal is to compare the inter slopes of each line, at each index) 
  //iterate over both, and subtract one from the other
  //this will compare every possible slope combination between both lines
  //which i think would be a nice way to define an incoming target

  let stored_slope_differences = []; 

  for(let i = 0; i < line_1_array.length; i++) { 
      //whicever is larger takes priority first (additive formula) <-- need positive points
      stored_slope_differences.push(line_1_array[i] - line_2_array[i]); //after getting all differences per line, comparing those differences by subtracting, and storing
  }

   //after storing, run a variety of algorithms (minimim amount desired for addition algorithm however matches could be used here too...)

   let minimum = stored_slope_differences.add(); //WHATEVER THIS ADDED VALUE IS, ITS USED TO COMPARE WITH ALL THE OTHER LINES THAT NEED TO BE COMPARED

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
