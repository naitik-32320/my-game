var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["be95b09a-dbaa-4157-995a-c4925bc9dfec","12e07bbd-741c-4ebb-bffd-f2194a403729","c881615d-a1f3-49f1-8ce9-cd97d8301f48","c57195a9-9d41-4b94-ae2e-d55e3fbca7e4","d3117e48-e7be-4741-b955-13e18f01c905"],"propsByKey":{"be95b09a-dbaa-4157-995a-c4925bc9dfec":{"name":"boy","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"12e07bbd-741c-4ebb-bffd-f2194a403729":{"name":"virus1","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"c881615d-a1f3-49f1-8ce9-cd97d8301f48":{"name":"virus2","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"c57195a9-9d41-4b94-ae2e-d55e3fbca7e4":{"name":"virus3","sourceUrl":"assets/api/v1/animation-library/gamelab/vuGxGgu19I_p4teSZ_kILYji8V8GyfQk/category_germs/virus03_10.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"vuGxGgu19I_p4teSZ_kILYji8V8GyfQk","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vuGxGgu19I_p4teSZ_kILYji8V8GyfQk/category_germs/virus03_10.png"},"d3117e48-e7be-4741-b955-13e18f01c905":{"name":"virus4","sourceUrl":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"dHshQXiche2omlBhwWrKH5zbfEiC6doy","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var virus1, virus2, virus3,virus4;
var corridor1, corridor2;
var rahul;

  corridor1 = createSprite(190,120,420,3);
  corridor2 = createSprite(190,260,420,3);
  
  rahul = createSprite(20,190,13,13);
  rahul.shapeColor = "green";
  rahul.setAnimation("boy");
  rahul.scale=0.1;
  
    virus1 = createSprite(100,130,10,10);
    virus1.shapeColor = "red";
    virus1.setAnimation("virus1");
    virus1.scale=0.1;
    virus2 = createSprite(215,130,10,10);
    virus2.shapeColor = "red";
    virus2.setAnimation("virus2");
    virus2.scale=0.1;
    virus3 = createSprite(165,250,10,10);
    virus3.shapeColor = "red";
    virus3.setAnimation("virus3");
    virus3.scale=0.1;
    virus4 = createSprite(270,250,10,10);
    virus4.shapeColor = "red";
    virus4.setAnimation("virus4");
   virus4.scale=0.1;
//add the velocity to make the car move.
  virus1.velocityY=8;
  virus2.velocityY=8;
  virus3.velocityY=-8;
  virus4.velocityY=-8;
playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3", true);



function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
  virus1.bounceOff(corridor1);
  virus1.bounceOff(corridor2);
  virus2.bounceOff(corridor1);
  virus2.bounceOff(corridor2);
  virus3.bounceOff(corridor1);
  virus3.bounceOff(corridor2);
  virus4.bounceOff(corridor1);
  virus4.bounceOff(corridor2);

//Add the condition to make the sam move left and right
if (keyDown("right")) {
  rahul.x=rahul.x+5;
}
if (keyDown("left")) {
  rahul.x=rahul.x-5;
}

//Add the condition to reduce the life of sam if it touches the car.
  if ( rahul.isTouching(virus1)||
   rahul.isTouching(virus2)||
   rahul.isTouching(virus3)||
   rahul.isTouching(virus4)) {
 rahul.x=20;
 rahul.y=190;
life=life+1;
  }
  
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
