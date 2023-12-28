Alex E
Notes

Topic 
-Each feature represents a new point on the line. (ex feature: pixel density (black white scale), plotted, move next)
-After plotting, converting into a point to denote the entire line (xi * yi ...) <-- this is the proof <--however, comparing points isnt as diverse of a process than comparing lines (storing and comparing lines vs storing and comparing points))
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
parameters: pixel_color, pixel_density
algorithm: pixel_color * pixel_density ...
picture.js
    
example line function:

pixels = [{color_density}...] ...location not necessary, change in x denotes change in pixel location
graph_point_amount = 0;
x_value = 0;

for(i in pixels)
    let graph_point_amount += pixels[i].density; //this is on a black and white scale (for smaller pictures less variance in color)
    x_value += 1; 
    graph[x_value] = graph_point_amount

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop
parameters: pixel_density, pixel_color
algorithm: pixel_location * pixel_color + ...n
video.js   
                                                                                                                                                                                                                                                
conclusion
a line drawn along the x can denote uniqueness... just add the attributic set per feature, plot and move next. The attributic set being all the parameters describing the feature.
once the line is drawn, convert it into a single point using (xi * yi ...n) - this should be the unique point of the line, however, comparison methods on the line seem nicer
                                                                                                                                                                                                                                                                                                                                          
