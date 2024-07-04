function pcb_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[62.7398065,-66.5062128],[62.6062321,-23.5062128]]).appendArc([64.6062225,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.4,-21.5]).appendArc([169.4,-23.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.4,-108.5]).appendArc([167.4,-110.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.746,-110.5]).appendArc([84.746,-108.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.746,-70.5]).appendArc([82.746,-68.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.7397969,-68.5]).appendArc([62.7398065,-66.5062128],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[165.5,-87],"radius":1.5})
.union(
    CAG.circle({"center":[94.946,-100],"radius":1.5})
).union(
    CAG.circle({"center":[165.5,-36],"radius":1.5})
).union(
    CAG.circle({"center":[89,-27],"radius":1.5})
)).extrude({ offset: [0, 0, 1.5] });
}




                function pcb_case_fn() {
                    

                // creating part 0 of case pcb
                let pcb__part_0 = pcb_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let pcb__part_0_bounds = pcb__part_0.getBounds();
                let pcb__part_0_x = pcb__part_0_bounds[0].x + (pcb__part_0_bounds[1].x - pcb__part_0_bounds[0].x) / 2
                let pcb__part_0_y = pcb__part_0_bounds[0].y + (pcb__part_0_bounds[1].y - pcb__part_0_bounds[0].y) / 2
                pcb__part_0 = translate([-pcb__part_0_x, -pcb__part_0_y, 0], pcb__part_0);
                pcb__part_0 = rotate([0,0,0], pcb__part_0);
                pcb__part_0 = translate([pcb__part_0_x, pcb__part_0_y, 0], pcb__part_0);

                pcb__part_0 = translate([0,0,0], pcb__part_0);
                let result = pcb__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return pcb_case_fn();
            }

        