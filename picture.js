
    Model 1 - Alex Eatman
    my perspective of a picture model algorithm
    _______   
   -name: pixel distance relativety algorithm
   -description: takes the slope between all points in a unique line representing a picture, and stores its values in a single array. Array length, used on lookup, to run a min distance algorithm. Minimum value used as the closest label.
   -complexity: n^2 on incoming target --- n on min algorithm against one line

    new incoming target (line) comes in and comparing against other stored lines starts...

    the unique line is the image that comes in. ()

    techniques 
  1. line matching. (exact matching) <-- unnneccessary but nice
     -compare how many points in a row match up between lines. 
     -counts and seperated inter-lines taken into consideration for statistical reasoning. *
     -the more points that match the better, the more smaller lines that match the better
     -hint: seperate lines, use those lines as individual models
  2. use the min regression distance formula between lines, per each individual feature <-- unnneccessary but nice (comparing each line side by side and subtracting by the variant)
     -subtract feature points between lines, add and take the lowest value
     -the lowest value used for statistical reasoning. *
  3. compare every combinational slope between lines <-- neccessary and will show the true closeness of two lines
     -taking all combinations of slopes within a unique line. comparing the returned array against other lines sloped arrays. getting difference per index slope, adding to a min, which is compared against other mins stored. <-- creating an array of slopes is in n^2. incoming target is the line
     -algorithm run on the outline of grayish to black pixels (color variant).
     -on search, must select closest array line lengths which are already stored for comparing the incoming target line. (added difference between arrays <-- min selected <-- already noted right above)
     -comparison of incoming target min against stored mins used for statistical reasoning * (after algorithm)
  4. increasing and decreasing lines along the y axis, to compare to other lines
     -3 negates this
     -this can be done before each deep comparison of lines maybe
  5. rotating pixels within set to run model on. getting everything there.
     -3 negates this
  6.shape overlapping 
    -nice but can not tell the difference between all things as easily, which is what I am doing with a unique line instead! Good luck guys. Signed off as Alexander Eatman. Line theroy and unique picture comparison algorithm.
      
