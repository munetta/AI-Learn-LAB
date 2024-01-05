
#db lookup
stored_lines = fetch_array_of_stored_line_arrays();
stored_slopes = convert_stored_line_arrays_to_slope_combinations(stored_lines)

def image_intake(file_name) 

    #fetch image and make sure it can be iterated
    image = fetch_image('file')
    image = convert_to_black_and_white(image)
    image = convert_to_iterable_array(image)

    #target picture comes in, picture converted to a unique line (white pixels skoiepped)
    target_line = [];
    x_axis_iterator = 0

    #target line drawn
    for pixels in image 
        if pixels[i].color > 5
           target_line.append(pixels[i].color)
        x_axis_iterator += 1 

    #all slopes drawn from target line
    target_slopes = []

    for i in target_line 
       point_one = target_line[i]
          for j = i + 1 in target_line
            point_two = target_line[j]
            #get slope between point one and point two and store in target_slopes (subtracting slopes next)
            

   


