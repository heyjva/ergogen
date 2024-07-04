function board_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[62.7398065,-66.5062128],[62.6062321,-23.5062128]]).appendArc([64.6062225,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.4,-21.5]).appendArc([169.4,-23.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.4,-108.5]).appendArc([167.4,-110.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.746,-110.5]).appendArc([84.746,-108.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.746,-70.5]).appendArc([82.746,-68.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.7397969,-68.5]).appendArc([62.7398065,-66.5062128],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        