class House{
    constructor(x, y, house){
        this.x = x;
        this.y = y;
        this.house = house;
    }

    display(){

        this.house.x = this.x;
        this.house.y = this.y;
        this.house.visible = true;
        this.house.scale = 0.5;
        console.log(this.house);
    }
}