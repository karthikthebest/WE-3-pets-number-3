class food{

constructor(){

    this.foodStock = 0;

this.image = loadImage("Milk.png")

this.lastFed;

}

updateFoodStock(foodStock){

    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;

   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }


display(){
   
    var x=70,y=110;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      } 


}


}

bedroom(){
  background(bedroom,550,550)
}

garden(){
  background(garden,550,500)
}

washroom(){
 background(washroom,550,500)
}

}