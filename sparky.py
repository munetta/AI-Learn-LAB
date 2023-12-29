Alex E
Notes

Topic 
-Each feature represents a new point on a line. (ex feature: pixel density (on the black to white scale), plotted, move next)
-After plotting, converting into a point to denote the entire line (xi * yi ...) <-- this is the proof however, comparing points isnt as diverse of a process than comparing lines (storing and comparing lines vs storing and comparing points) <-- would assume lines are nicer to compare)
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
parameters: pixel_color, pixel_density
algorithm: pixel_color * pixel_density ...
picture.js
    
example line function:

pixels = [{color_density}...] ...location not necessary, change in x denotes change in pixel location
graph_point_amount = 0;
x = 0;

for(i in pixels)
    let graph_point_amount += pixels[i].density; <-- This is on a black and white scale (for smaller pictures less variance in color)
    x += 1; 
    graph[x_value] = graph_point_amount

Once the line is graphed, it is stored for an incoming target line
The comparisons assuming can be very diverse here

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop
parameters: pixel_density, pixel_color
algorithm: pixel_location * pixel_color + ...n
video.js   
                                                                                                                                                                                                                                                
conclusion
a line drawn along the x can denote uniqueness... just add the attributic set per feature, plot and move next. The attributic set being all the parameters describing the feature.
once the line is drawn, convert it into a single point using (xi * yi ...n) - this should be the unique point of the line, however, comparison methods on the line seem nicer

if colors, splitting up into color density per color would be okay. but black and white, would be the best then just multiplying the x and y black pixels, per pixel, plotted. different approach but i think would be the most accurate technique in labeling. one line per picture. x*y then move x,  
