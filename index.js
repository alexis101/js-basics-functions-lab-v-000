// Code your solution in this file!
function distanceFromHqInBlocks(blocks){

 if (blocks > 42) {
   return blocks - 42;
 }
 else {
   return 42 - blocks;
  }
 }

 function distanceFromHqInFeet(blocks){
   return distanceFromHqInBlocks(blocks) * 264
 }

 function distanceTravelledInFeet(aBlock, bBlock){
   return `${(aBlock - bBlock)*264}`
 }
