function plate_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[67.1398065,-66.5062128],[67.0062321,-23.5062128]]).appendArc([69.0062225,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([163,-21.5]).appendArc([165,-23.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165,-108.2952265]).appendArc([163.0052334,-110.2952197],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.7512334,-110.4947529]).appendArc([84.746,-108.4947597],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.746,-70.5]).appendArc([82.746,-68.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([69.1397969,-68.5]).appendArc([67.1398065,-66.5062128],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[101.946,-107],[115.946,-107]]).appendPoint([115.946,-93]).appendPoint([101.946,-93]).appendPoint([101.946,-107]).close().innerToCAG()
.union(
    new CSG.Path2D([[147,-39],[161,-39]]).appendPoint([161,-25]).appendPoint([147,-25]).appendPoint([147,-39]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-56],[161,-56]]).appendPoint([161,-42]).appendPoint([147,-42]).appendPoint([147,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-73],[161,-73]]).appendPoint([161,-59]).appendPoint([147,-59]).appendPoint([147,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-90],[161,-90]]).appendPoint([161,-76]).appendPoint([147,-76]).appendPoint([147,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-107],[161,-107]]).appendPoint([161,-93]).appendPoint([147,-93]).appendPoint([147,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-39],[143,-39]]).appendPoint([143,-25]).appendPoint([129,-25]).appendPoint([129,-39]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-56],[143,-56]]).appendPoint([143,-42]).appendPoint([129,-42]).appendPoint([129,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-73],[143,-73]]).appendPoint([143,-59]).appendPoint([129,-59]).appendPoint([129,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-90],[143,-90]]).appendPoint([143,-76]).appendPoint([129,-76]).appendPoint([129,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-107],[143,-107]]).appendPoint([143,-93]).appendPoint([129,-93]).appendPoint([129,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-39],[125,-39]]).appendPoint([125,-25]).appendPoint([111,-25]).appendPoint([111,-39]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-56],[125,-56]]).appendPoint([125,-42]).appendPoint([111,-42]).appendPoint([111,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-73],[125,-73]]).appendPoint([125,-59]).appendPoint([111,-59]).appendPoint([111,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-90],[125,-90]]).appendPoint([125,-76]).appendPoint([111,-76]).appendPoint([111,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-39],[107,-39]]).appendPoint([107,-25]).appendPoint([93,-25]).appendPoint([93,-39]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-56],[107,-56]]).appendPoint([107,-42]).appendPoint([93,-42]).appendPoint([93,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-73],[107,-73]]).appendPoint([107,-59]).appendPoint([93,-59]).appendPoint([93,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-90],[107,-90]]).appendPoint([107,-76]).appendPoint([93,-76]).appendPoint([93,-90]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.6] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plate_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        