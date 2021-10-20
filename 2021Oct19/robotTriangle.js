function trackRobot(north,east,south,west){
    if(north === undefined){
        north = 0;
    }
    if(south === undefined){
        south = 0;
    }
    if(east === undefined){
        east = 0;
    }
    if(west === undefined){
        west = 0;
    }
    var x = east - west;
    var y = north - south;
    return [x, y];
}
function doesTriangleFit(triangle1,triangle2){
    var validTriangle = true;
    let a1 = triangle1[0];
    let b1 = triangle1[1];
    let c1 = triangle1[2];
    let a2 = triangle2[0];
    let b2 = triangle2[1];
    let c2 = triangle2[2];
    if(a1 +b1 <= c1 || a1 + c1 <= b1 || b1 + c1 <= a1){
        validTriangle = false;
    }
    if(a2 +b2 <= c2 || a2 + c2 <= b2 || b2 + c2 <= a2){
        validTriangle = false;
    }
    let p1 = a1 + b1 + c1;
    let p2 = a2 + b2 + c2;
    var area1 = Math.sqrt(p1*(p1 -a1)*(p1 -b1)*(p1 -c1));
    var area2 = Math.sqrt(p2*(p2 -a2)*(p2 -b2)*(p2 -c2));
    if(area1 <= area2 && validTriangle){
        return true;
    }else{
        return false;
    }
}
console.log(trackRobot(-10,20,10));
console.log(doesTriangleFit([1,2,4],[1,2,6]));