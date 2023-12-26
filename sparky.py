hello world

Alex E

The unique point on a graph via its input set (features) is used to create a regression model from scratch. 
Points eventually becoming lines (in some cases, measured in intervals), however, lines being able to convert back into single unique points for labeling (if necessary) and for faster comparing when an incoming target comes in (efficency).
Regression mean formulas can be used for comparing stored unique lines, with incoming target lines (unefficent but possibly much more accurate labeling). 
Iteritive addidive comparing is used for comparing incoming target points (more efficient but if not done correctly, less accurate labeling). 

Variance patterns                                                                           

why convert a line to a single point on a server for labeling.
-avoid the regression formula running on servers - however, still need to run 'a' formula just without division...
-might still be slower though

MAIN POINT IS SOME MODELS MIGHT NEED LINES WHILE OTHERS DO NOT - however if lines are neccessary, you can convert them into points to compare in a more friendly manner. Also the differential algorithm between lines might be computationally more expensive than say converting a line to a unique point then comparing.
                                                                                                                                                                                                                                                                                                                         
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

How to convert an incoming line to a single point -- knowing the line is unique, multiply the y and the x together and add down the entire line, then store -- not necesary but makes comparing easier

Improvement
-when the incoming line is denoted, find a way to define it using objects, etc

features
pixel_1     ...t (the target is all the features added up) option one: added on single axis --- option two: added on many axioms
-------
pixel_color*
pixel_location (local differential parameter)

(they say a parameter is a constant in a formula)

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
                                                                                                                                                                              
                                                                                                                                                                              
