Alex E
Notes

Topic 
a line drawn on a graph coming from an input set where each feature is added along an x axis, which is incrementing per feature (pixel). (ex feature: pixel density (black white scale), plotted, move next)
after plotting, converting into a point to denote the entire line (xi * yi ...) <-- this is the proof <--however  comparing points isnt as diverse of a process than comparing lines
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
parameters: pixel_color, pixel_density
algorithm: pixel_color * pixel_density ...
picture.js
    
example line function:

let pixels = [{color, density}...] ...location not necessary, change in x denotes uniqueness
let graph_point_amount = 0;
ley x_value = 0;
let difference_between_points = []; //object with direction, and amount. for measuring similar lines at different scales
let matched_points = []; //matched points within the line

for(i in pixels)
    graph_point_amount += pixels[i].color (black white) * pixels[i].density
    x_value += 1; 
    graph[x_value] = graph_point_amount
    graph_point_amount = 0

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop
parameters: pixel_density, pixel_color
algorithm: pixel_location * pixel_color + ...n
video.js   
                                                                                                                                                                                                                                                
conclusion
a line drawn along the x can denote uniqueness... just add the attributic set per feature, plot and move next. The attributic set being all the things associated with the feature.
once the line is drawn, convert it into a single point using (xi * yi ...n) - this should be the unique point of the line, however, comparison methods on the line seem nicer
                                                                                                                                                                                                                                                                                                                                          
