function collide(object1, objects2){

    if (object1.x - objects2.x < objects2.width/2 + object1.width/2
      && objects2.x - object1.x < objects2.width/2 +object1.width/2
      && object1.y - objects2.y < objects2.height/2 + object1.height/2
      && objects2.y - object1.y < objects2.height/2 + object1.height/2) {
    
        return true;
  }
     else {
     return false;
  }
  
  
  
  }