// function Persons(name,age){
//     this.name = name;
//     this.age = age
//     this.getInfo = function (){
//         if(this.age < 16){
//             console.log(`${this.name} maktabda uqiydi.`);
//         }else if(this.age > 16){
//             console.log(`${this.name} universtitutda uqiydi`)
//         }
        
//     }
// }

// let person = new Persons('Umid',12)

// person.getInfo()

// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age

//     }
//     getInfo(){
//         if(this.age < 16){
//             console.log(`${this.name} maktabda uqiydi.`);
//         }else if(this.age > 16){
//             console.log(`${this.name} universtitutda uqiydi.`)
//         }
//     }
// }

// let person2 = new Person('Javloppn',24)

// person2.getInfo()



////////////////  Homework with classs   /////////////////


class Figure{
    constructor(width,height){
        this.width = width;
        this.height = height;

    }
    createElement(){
        let div = document.createElement('div')
        return div
    }

    render(element){
        // let element = this.createElement()
        document.querySelector('#wrapper').append(element)
    }
}

class Rectangle extends Figure{
    constructor(width,height,bgColor){
        super();
        this.width =width;
        this.height = height;
        this.bgColor = bgColor
    }
    createRectangle(){
        let el = super.createElement()
        el.style.width = this.width
        el.style.height = this.height
        el.style.backgroundColor = this.bgColor

        return el
    }
    render(){
        let elem = this.createRectangle()
        super.render(elem)
    }
}




let rectangle = new Rectangle('100px','200px','red')
rectangle.render()





class Circle extends Figure{
    constructor(circle,bgColor,brRadius){
        super();
        this.circle = circle;
        this.bgColor = bgColor
        this.brRadius = brRadius
    }
    createCircle(){
        let el = super.createElement()
        el.style.width = this.circle
        el.style.height = this.circle
        el.style.backgroundColor = this.bgColor
        el.style.borderRadius = this.brRadius

        return el
    }
    render(){
        let elem = this.createCircle()
        super.render(elem)
    }
}

let circle = new Circle('200px','blue','50%')
circle.render()

class Square extends Figure{
    constructor(square,bgColor){
        super();
        this.square = square;
        this.bgColor = bgColor;
    }
    createSquare(){
        let el = super.createElement()
        el.style.width = this.square
        el.style.height = this.square
        el.style.backgroundColor = this.bgColor

        return el
    }
    render(){
        let elem = this.createSquare()
        super.render(elem)
    }
}

let square = new Square('200px','yellow')
square.render()


class Oval extends Figure{
    constructor(width,height,bgColor,brRadius){
        super();
        this.width =width;
        this.height = height;
        this.bgColor = bgColor;
        this.brRadius = brRadius
    }
    createOval(){
        let el = super.createElement()
        el.style.width = this.width
        el.style.height = this.height
        el.style.backgroundColor = this.bgColor
        el.style.borderRadius = this.brRadius

        return el
    }
    render(){
        let elem = this.createOval()
        super.render(elem)
    }
}




let oval = new Oval ('100px','200px','white','50%')
oval.render()

class Triangle extends Figure{
    constructor(width,height,border,brRightWidth,brLeftWidth,brBottom){
        super();
        this.width =width;
        this.height = height;
        this.border = border;
        this.br = brRightWidth;
        this.brLeftWidth = brLeftWidth;
        this.brBottom = brBottom
    }
    createTriangle(){
        let el = super.createElement()
        el.style.width = this.width
        el.style.height = this.height
        el.style.border = this.border
        el.style.borderRightWidth = this.brRightWidth
        el.style.borderLeftWidth = this.brLeftWidth
        el.style.borderBottom = this.brBottom

        return el
    }
    render(){
        let elem = this.createTriangle()
        super.render(elem)
    }
}




let triangle = new Triangle ('0','0','0 solid transparent','100px','200px','100px solid orange')
triangle.render()