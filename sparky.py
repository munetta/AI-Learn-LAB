hello world

Alex E

Topic 
The unique point on a graph coming from an input set (features) is used to create a regression model from scratch. The algorithm acting on the input set must add to a unique point. (plotting single point)
vs
A categorical constant between features plotted seperately along the x has shown uniqueness <-- conversion process to a single point for a more friendly input target algorithm (plotting line <-- then converting back to point)

why convert a line to a single point on a server for labeling.
-avoid the regression formula running on servers - however, still need to run 'a' formula to convert the line to the unique point
-might still be slower though

conversion formula
considering the line being accurate, multiply the x and y, and add to a global until line end reached, then plot that single number (yi*xi + ...n) 

MAIN IDEA IS SOME MODELS MIGHT NEED LINES WHILE OTHERS DO NOT
-however if lines are neccessary, you can convert them into points to compare in a more friendly manner. 
-Also the differential algorithm between lines might be computationally more expensive than say converting a line to a unique point then comparing.
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
line neccessary: no
transforming line: no
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n
picture.js

Example point function:

let pixels = [{color, location}...] ...location incremented on a count per iteration
let graph_point_amount = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color * pixels[i].location

-place graph_point_amount along the y axis on a chosen x axis
    
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
-when the incoming line is denoted, find a way to define it using objects, etc (faster lookup definition)

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
video.js                                                                                                                                                                              
                                                                                                                                                                                                                                                
PAGE TIME MODEL 
goal: show a pop up model on a page before the user clicks.                                                                                                                                                                                                                                                
parameters: page categories
target: the category the user clicks (label)
algorithm: categroy (n) * category time (s)                                                                                                                                                                             
-create seperate models per click (when click, append to a different inner model -- using times above 0s)
-use that specific model to deduce     
page.js                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                              
THEORY
How to define an input set uniquely via a line 
each feature has a categorical constant that is incremental to help plot a unique point, making up the unique line overtime. ()    
The line is saved, and when an incoming line comes in, a regression min distance formula is used to compare, getting the line that most matches, which would be labled  
                                                                                                                                                                              
How to define an input set uniquely via a point 
run the algorithm and instead of plotting seperately on the x axioms, plot on one.. (this would be the test for the line conversion process -- some relatable amount fuk mate)                                                                                                                                                                              

Question                                                                                                                                                                              
Can you convert the line made by the model back to the point. 
yes, by multiplying the x/y adding over, and plotting                                                                                                                          

why 
more friendly comparison algorithm...     
must compare conversion-to-point (two step) and regression-min-dist (one step) formulas                                                                                                                                                                           

downside
two step process instead of one step
                                                                                                                                                                              
                                                                                                                                                                              
