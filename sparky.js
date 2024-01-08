
/*
  technique 1. create a unique line of grayish to black pixels (skip white pixels)
  run n^2 algorithm
  store slopes
  compare to other arrays (you can do this wholistically or compare via each pixel in pixel slope object)

  stored_unique_lines: all pictures stored via a unique line of grayish to black pixels
  slope_arrays: converting each unique line to a slope array
  graph: to show the target line on the graph 
  standard_y: putting everything right in the middle. the varying pixel color/number increasing and decreasing at this point
  pixel_slope_object: when drawing the line, each real point plotted, will be denoted in this as (x-y) (iterable difference starts at bottom left) (array gets larger, then smaller)
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

function image_intake(file_name)  {

    /* 
        fetch image, run outline algorithm, convert to array if its not
    */
    
    let image = fetch_image('file')
    image = convert_to_black_and_white(image)
    image = convert_to_iterable_array(image)

    /*
        picture converted to a unique line on the graph
        x_axis_iterator increases every pixel. white pixels arent plotted. (iteritive difference) <-- can compare against the actual difference
        
    */
    
   let x_axis_iterator = 0

    /*
        target line drawn
    */

    for(let i = 0; i < image.length; i++) {
        //whatever numbers are gray to black 
        if(image[i].color === 'gray' || image[i].color === 'black') {
            //this is for exact pixel matching... 
            pixel_slope_object[`${image[i].x-image[i].y}`] = [];
            graph[standard_y] = 1; //0 white, 1, black
        }
        x_axis_iterator += 1;
    }
    

}

/*
    seperate: take each pixel, save outside, when run into change, denote, the x-y as a change, reiterate, label black
*/

function convert_to_black_and_white(image) {
      
}
 
function convert_image_to_iterable_line(image) {
    
}

/*
  technique 2. create a unique line of grayish to black pixels (skip white pixels)
  run n^2 algorithm
*/
            

   


