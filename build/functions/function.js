"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// get all dimention area in one function
let areaCalc = (x, y) => {
    let circle = () => Math.PI * x * x;
    let triangle = () => x * y / 2;
    let square = () => x * y;
    return [circle(), triangle(), square()];
};
console.log(areaCalc(1, 2));
// get dimention vise area form given args
let areaCalc1 = (dimention, x, y) => {
    if (dimention == 'circle') {
        return Math.PI * x * x;
    }
    if (dimention == 'triangle') {
        return x * y / 2;
    }
    if (dimention == 'square') {
        return x * y;
    }
};
console.log(areaCalc1('circle', 1, 2));
// get area based on args using enum and interface
var Shapes;
(function (Shapes) {
    Shapes["Circle"] = "circle";
    Shapes["Sqaure"] = "square";
    Shapes["Triangle"] = "triangle";
    Shapes["Rectangle"] = "rectangle";
})(Shapes || (Shapes = {}));
/**
 * to get area of given shape
 * @param shapeName name of the given shape for @example squre, rectangle etc.
 * @param dimension dimension of the given shape
 * @returns
 */
function getArea(shapeName, dimension) {
    switch (shapeName) {
        case Shapes.Sqaure:
            const height = dimension.height;
            return height ? height * height : 0;
        case Shapes.Triangle:
            const height1 = dimension.height;
            const width = dimension.width;
            return height1 && width ? height1 * width / 2 : 0;
        case Shapes.Circle:
            const radius = dimension.radius;
            return radius ? Math.PI * radius * radius : 0;
        case Shapes.Rectangle:
            const l = dimension.length;
            const w = dimension.width;
            return l && w ? w * l : 0;
    }
}
// console.log(getArea(Shapes.Sqaure, { height: 2 }));
// console.log(getArea(Shapes.Circle, { radius: 2 }));
console.log(getArea(Shapes.Triangle, { height: 2, width: 2 }));
console.log(getArea(Shapes.Rectangle, { length: 2, width: 2 }));
