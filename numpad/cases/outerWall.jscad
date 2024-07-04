function xlBoard_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[59.5817023,-60.4307392],[60.9330976,-21.4307392]]).appendArc([62.931898,-19.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([164.9958796,-19.5]).appendArc([166.9958754,-21.504116],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.809197,-112.21069]).appendArc([164.766158,-114.2061108],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.4669568,-112.5421265]).appendArc([85.51,-110.5425897],{"radius":2,"clockwise":true,"large":false}).appendPoint([85.51,-64.5]).appendArc([83.51,-62.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.5805027,-62.5]).appendArc([59.5817023,-60.4307392],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function outerWall_case_fn() {
                    

                // creating part 0 of case outerWall
                let outerWall__part_0 = xlBoard_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let outerWall__part_0_bounds = outerWall__part_0.getBounds();
                let outerWall__part_0_x = outerWall__part_0_bounds[0].x + (outerWall__part_0_bounds[1].x - outerWall__part_0_bounds[0].x) / 2
                let outerWall__part_0_y = outerWall__part_0_bounds[0].y + (outerWall__part_0_bounds[1].y - outerWall__part_0_bounds[0].y) / 2
                outerWall__part_0 = translate([-outerWall__part_0_x, -outerWall__part_0_y, 0], outerWall__part_0);
                outerWall__part_0 = rotate([0,0,0], outerWall__part_0);
                outerWall__part_0 = translate([outerWall__part_0_x, outerWall__part_0_y, 0], outerWall__part_0);

                outerWall__part_0 = translate([0,0,0], outerWall__part_0);
                let result = outerWall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return outerWall_case_fn();
            }

        