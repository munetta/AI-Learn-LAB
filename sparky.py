Alex E
Notes

Topic 
The unique point on a graph coming from an input set (features) is used to create a regression model from scratch. The algorithm acting on the input set must add to a unique point. Points being denoted uniquely themselves or making up lines, also denoted uniquely.

Argument
determine the difference between plotting a single point, plotting a line and converting to a point, and plotting a line. is plotting the line necessary per incoming input set. Porbably not.

1. point - can plotting a single point define uniqueness (additive formula)
2. line - can plotting with a single line and converting to a point show uniqueness (additive formula)
3. line - can plotting a line show uniqueness (running the min distance formulas)

conversion formula
considering the line being accurate, multiply the x and y, and add to a global until line end reached, then plot that single number (yi*xi + ...n) 
ex: converting 18 frames making up a line, into one point that defines the 18 frames uniquely

MAIN IDEA IS SOME MODELS MIGHT NEED LINES WHILE OTHERS DO NOT 
                                                                                                                                                                                                                                                                                                                         
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
instead of click maybe a search function                                                                                                                                                                              
                                 
 conclusion
 -plotting the line on an input request is not necessary - because the algorithm i wrote isnt neccessary cause i made a mistake and ill keep makin em real time
 -a point is necessary to denote a single frame numerically                                                                                                                                         
 -large differential numbers determine greater uniqueness per incoming target
 -saving plotted points overtime determines frames (this is where you can compare lines --- for example the basket going though the hoop)                                                                                                                                                                             
 

 
 
 
                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                              
