Alex E
Notes

Topic 
The unique point on a graph coming from an input set using a constant differential number between features.
vs
a line drawn on a graph coming from an input set, drawn across, based off the set of attributic parameters associated with each feature added accordingly per iput set (ex: pixel color, pixel density, pixel ... added, plotted, move next) 
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
line neccessary: no
transforming line: no
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n
picture.js

Example point function:

let pixels = [{color, density, location}...] ...location incremented on a count per iteration
let graph_point_amount = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color * pixels[i].location

-place graph_point_amount along the y axis on a chosen x axis
    
example line function:

let pixels = [{color, location}...] ...location incremented on a count per iteration
let graph_point_amount = 0;
ley x_value = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color + pixels[i].density
    x_value += 1; 
    -place graph_point_amount on graph
    graph_point_amount = 0

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop (must observe how many frames/xPoints/ms are necessary to identify correct video)
line duration transformed: 18 x points... one point representing a millisecond and a frame. 18 frames tied together to hopefully represent a basketball going through a hoop (saved for incoming targets) -- saved as unique po
transforming line: yes  ...transoform 18 point incoming lines into uniquely defined points, and compare with the other lines already transformed and plotted unique points (the beginning to end of the lines, each individual node, can be used algorithmically to transform the line into a single unique point)
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n
video.js                                                                                                                                                                              
                                                                                                                                                                                                                                                
PAGE TIME MODEL 
goal: show a pop up model on a page before the user clicks.                                                                                                                                                                                                                                                
parameters: page categories
target: the category the user clicks (label)
algorithm: categroy (n) * category time (s)                                                                                                                                                                             
-create seperate models per click (when click, append to a different inner model -- using times above 0s)
-use that specific model to deduce     
page.js           
instead of click maybe a search function                                                                                                                                                                              
                                 
 conclusion
 a line drawn along the x can denote uniqueness... just add the attributic set per feature, plot and move next. The attributic set being all the things associated with the feature.
 once the line is drawn, convert it into a single point.  
                                                                                                                                                                              
 
 

 
 
 
                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                              
