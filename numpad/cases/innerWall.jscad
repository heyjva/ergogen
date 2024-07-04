function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[67.1053301,-66.5046808],[67.0046918,-23.5046808]]).appendArc([69.0046863,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.996515,-21.5]).appendArc([164.996512,-23.503482],{"radius":2,"clockwise":true,"large":false}).appendPoint([164.8484773,-108.532691]).appendArc([162.8476881,-110.5292088],{"radius":2,"clockwise":true,"large":false}).appendPoint([91.1092078,-110.5007919]).appendArc([89.11,-108.5007921],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.11,-70.5]).appendArc([87.11,-68.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([69.1053246,-68.5]).appendArc([67.1053301,-66.5046808],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function innerWall_case_fn() {
                    

                // creating part 0 of case innerWall
                let innerWall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let innerWall__part_0_bounds = innerWall__part_0.getBounds();
                let innerWall__part_0_x = innerWall__part_0_bounds[0].x + (innerWall__part_0_bounds[1].x - innerWall__part_0_bounds[0].x) / 2
                let innerWall__part_0_y = innerWall__part_0_bounds[0].y + (innerWall__part_0_bounds[1].y - innerWall__part_0_bounds[0].y) / 2
                innerWall__part_0 = translate([-innerWall__part_0_x, -innerWall__part_0_y, 0], innerWall__part_0);
                innerWall__part_0 = rotate([0,0,0], innerWall__part_0);
                innerWall__part_0 = translate([innerWall__part_0_x, innerWall__part_0_y, 0], innerWall__part_0);

                innerWall__part_0 = translate([0,0,0], innerWall__part_0);
                let result = innerWall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return innerWall_case_fn();
            }

        