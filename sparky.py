hello world

1. the unique point on a graph via its input set (parameters/constants and features/variables however do not confuse what is necessary and not, uniqueness is the goal) is used to create a regression model from scratch. Points eventually becoming lines (measured in intervals), however, lines being able to convert back into single unique points for labeling (if necessary). Regression mean formulas are used on lines. Iteritive addidive comparing is used on single axis points.
2. model points can all be represented on a single axis (transforming lines into single unique points can be done algorithmically from start to finish of line) ex: video model second model <-- transforming a line into a single point makes it easier to compare incoming targets <-- if not transforming a line, comparisons of incoming lines can be done via a regular regression mean formula.

-parameter should be a constant local differential (to help define input set uniquely) <-- in this case pixel location is okay

why convert a line to a single point on a server for labeling.
-avoid the regression formula running on servers 
-might still be slower though (damnit david)
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
line neccessary: no
transforming line: no
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n

Example point function:

let pixels = [{color, location}...] ...location incremented on a count per iteration
let graph_point_amount = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color * pixels[i].location

-place graph_point_amount on x axis, graph_point_amount represented on y axis as unique
    
example line function:

let pixels = [{color, location}...] ...location incremented on a count per iteration
let graph_point_amount = 0;
ley x_value = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color * pixels[i].location
    x_value += 1; 
    -place graph_point_amount on graph
    graph_point_amount = 0
    
-use a regression formula on the line to get a value. 
-run that regression formula on all other stored lines, get the min distance, check the label, apply closest etc

DIFFERENCE
-first way avoids running the regression formula but might not define uniqueness "as well" -- I believe it would though
-second way defines uniqueness it seems more clearly but cant be certain on that

How to convert an incoming line to a single point -- knowing the line is unique, multiply the y and the x together and add down the entire line, then store

Improvement
-when the incomine line is denoted, find a way to define it using objects, etc

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop (must observe how many frames/xPoints/ms are necessary to identify correct video)
line duration transformed: 18 x points... one point representing a millisecond and a frame. 18 frames tied together to hopefully represent a basketball going through a hoop (saved for incoming targets) -- saved as unique po
transforming line: yes  ...transoform 18 point incoming lines into uniquely defined points, and compare with the other lines already transformed and plotted unique points (the beginning to end of the lines, each individual node, can be used algorithmically to transform the line into a single unique point)
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n
                                                                                                                                                                                                                                                
PAGE TIME MODEL 
goal: show a pop up model on a page before the user clicks.                                                                                                                                                                                                                                                
parameters: page categories
target: the category the user clicks (label)
algorithm: categroy (n) * category time (s)   
-create seperate models per click (when click, append to a different inner model -- using times above 0s)
-use that specific model to deduce                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                             
