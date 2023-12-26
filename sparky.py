hello world

1. the unique point on a graph via its input set (parameters/constants and features/variables however do not confuse what is necessary and not, uniqueness is the goal) is used to create a regression model from scratch. Or the diffrence between lines, however lines can be transoformed into points. unique point per input set still required to draw line.
2. model points can all be represented on a single axis (transforming lines into single unique points can be done algorithmically at chosen INTERVALS/between x values) ex: video model second model <-- transforming a line into a single point makes it easier to compare incoming targets <-- if not transforming line, comparisons of incoming lines can be done via a regular regression mean formula

REGRESSION PICTURE MODEL 
goal: a model to tell if a basketball is in a picture
transforming line: no
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n

REGRESSION VIDEO MODEL
goal: a model to tell if a basketball goes through a hoop (must observe how many frames/xPoints/ms are necessary to identify correct video)
line duration transformed: 18 x points... one point representing a millisecond and a frame 18 frames tied together to hopefully represent a basketball going through a hoop (saved for incoming targets) -- saved as unique point or as a line (unique point for easier comparison)
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
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
