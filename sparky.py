hello world

1. the unique point on a graph via its input set is used to create a regression model from scratch
2. model points can all be represented on a single axis (transforming lines into single unique points can be done algorithmically at chosen INTERVALS) ex: video model second model

REGRESSION PICTURE MODEL 
question: a model to tell if a basketball is in a picture
transforming line: no
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n

REGRESSION VIDEO MODEL
question: a model to tell if a basketball goes through a hoop (must observe how many points are necessary to identify correct video)
line duration transformed: 18 y points... one point representing a millisecond and a frame 18 frames tied together to hopefully represent a basketball going through a hoop
tansforming line: yes  ...transofrm 18 point incoming lines into one point, defined uniquely, to compare with the other lines already transformed and plotted as single points (the beginning to end of the lines, each individual node, can be used to transform into a single point uniquely)
parameters: pixel_location, pixel_color
algorithm: pixel_location * pixel_color + ...n

every 18 points, transform the line into a single point, plot... for incoming do the same

make sure to label the points with large zoom conferences 
