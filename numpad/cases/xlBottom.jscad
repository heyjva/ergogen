function xlBoard_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[58.5019508,-69.7540574],[58.4040656,-21.5040574]]).appendArc([60.4040615,-19.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.2,-19.5]).appendArc([172.2,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.2,-111.75]).appendArc([170.2,-113.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.346,-113.75]).appendArc([80.346,-111.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([80.346,-73.75]).appendArc([78.346,-71.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([60.5019467,-71.75]).appendArc([58.5019508,-69.7540574],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        