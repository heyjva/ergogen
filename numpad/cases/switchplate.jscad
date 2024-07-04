function switchplate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[84.7459904,-68.4969095],[84.6062321,-23.5062128]]).appendArc([86.6062225,-21.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.4,-21.5]).appendArc([169.4,-23.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.4,-108.5]).appendArc([167.4,-110.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.746,-110.5]).appendArc([84.746,-108.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.746,-68.5031223]).appendArc([84.7459904,-68.4969095],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[165.5,-87],"radius":1.5})
.union(
    CAG.circle({"center":[94.946,-100],"radius":1.5})
).union(
    CAG.circle({"center":[165.5,-36],"radius":1.5})
).union(
    CAG.circle({"center":[89,-27],"radius":1.5})
).union(
    new CSG.Path2D([[101.946,-107],[115.946,-107]]).appendPoint([115.946,-93]).appendPoint([101.946,-93]).appendPoint([101.946,-107]).close().innerToCAG()
).union(
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
)).extrude({ offset: [0, 0, 1.2] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switchplate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        