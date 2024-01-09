
/*

  technique 1. create a unique line of grayish to black pixels (skip white pixels) --- must create black pixels 
  run n^2 algorithm
  store slopes
  compare to other arrays (you can do this wholistically or compare via each pixel in pixel slope object)

  stored_unique_lines: all pictures stored via a unique line of grayish to black pixels
  slope_arrays: converting each unique line to a slope array
  graph: to show the target line on the graph <-- going to compare the straight line vs the curve... should not make a difference
  standard_y: putting everything right in the middle. the varying pixel color/number increasing and decreasing at this point. 
  pixel_slope_object: when drawing the line, each real point plotted, will be denoted in this as (x-y) (iterable difference starts at bottom left) (array gets larger, then smaller)
  my_outlining_color: the outlining color of every object...
  my_outlined_pixels: saves all outlined pixels to paint over

  question: would it be worth it to denote each pixel uniquely. 
  answer: no 
  why: the difference between each pixel should hold the same horizontally vs it being at an upwad curve. both definitions are unique, so both formats should work for the same algorithm. i think
  
*/

let stored_unique_lines = fetch_array_of_stored_line_arrays(); 
let slope_arrays = convert_stored_line_arrays_to_slope_combinations(stored_lines)
let pixel_slope_object = {};
let graph = [];
const image_length = 500;

for(let i = 0; i < image_length; i++) {
    graph[i] = []; 
    for(let j = 0; j < image_length; j++) {
        graph[i].push(0); 
    }
} 

let standard_y = Math.min(graph.length / 2); 
const my_outlining_color = 'black';
let my_outlined_pixels = {};

/* 
   client sending image to server 
*/

function image_intake(file_name)  {

    /* 
        fetch image, run outline algorithm, re-plot
    */
    
    let image = fetch_image('file')
    image = convert_to_black_and_white(image)

    /*
        picture converted to a unique line on the graph
        x_axis_iterator increases every pixel. white pixels arent plotted. (iteritive difference) <-- can compare against the actual difference
    */
    
   let x_axis_iterator = 0

    /*
        iterate over the image
    */

    for(let i = 0; i < image.length; i++) {
      
        /*
          whatever pixels are gray to black, pot it, and store its point in an object <-- these would be numbers > 299
        */
      
        if(image[i].color === 'gray' || image[i].color === my_outlining_color) {
          
            /* 
              every pixel has a stored array of slopes to other pixels (testing)
            */
          
            pixel_slope_object[`${image[i].x-image[i].y}`] = [];

            /* 
              plotting the point (i, j) --> (y, x)
              update the standard y based on the color. up or down
            */
          
            graph[standard_y += image[i].color][x_axis_iterator] = 1;

            /* 
              just a visual 
            */

            document.querySelector(`#${standard_y += image[i].color}-${x_axis_iterator}`).style.color = 'red';
          
        }

        /*
          always moving next. This is the unique seperator to help determine unique slopes per pixel / per point.
        */
      
        x_axis_iterator += 1;
      
    }

}

/*
   box change algorithm - wwhen change on the outside, store, move next
   just run a straight line in each direction from top right and bottom left -- increment, do the same
*/

let my_diagonol_point = 1;
let xy = {}

function convert_to_black_and_white(image, x, y) {
        
}
            
