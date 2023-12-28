Alex E
Notes

Topic 
a line drawn on a graph coming from an input set where each features multiplicative set is added along an x axis, which is incrementing per pixel. (ex feature: pixel density (black white scale), plotted, move next) <-- thats one unique point per the line that gets a min distance applied to it
after plotting, converting into a point to denote the entire line (xi * yi ...) <-- this is the proof <-- wrong, because comparing lines isnt as easy
                                                                                                                                                                                                                                                                                                                         
REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
parameters: pixel_color, pixel_density
algorithm: pixel_color * pixel_density ...
picture.js
    
example line function:

let pixels = [{color, density}...] ...location not necessary, change in x denotes uniqueness
let graph_point_amount = 0;
ley x_value = 0;

for(i in pixels)
    graph_point_amount += pixels[i].color * pixels[i].density
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
once the line is drawn, convert it into a single point using (xi * yi ...n)
                                                                                                                                                                                                                                                                                                                                          
