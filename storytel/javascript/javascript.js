// storyteller 
// let porridge = ["First bowl", "Second bowl" , "Third bowl"];
// ​ 
// document.getElementById('choiceOne').addEventListener('click', function() {
//     tellResponse('This porridge is too hot!');
// });
// document.getElementById('choiceTwo').addEventListener('click', function() {
//     tellResponse('This porridge is too cold');
// });
// document.getElementById('choiceThree').addEventListener('click', function() {
//     tellResponse('Ahhh, this porridge is just right');
// ​
//     buttonOne('First chair');
//     buttonTwo('Second chair');
//     buttonThree('Third chair');
// });
// ​
// tellStory('Once upon a time, there was a little girl named Goldilocks.  She  went for a walk in the forest.  Pretty soon, she came upon a house.  She knocked and, when no one answered, she walked right in. At the table in the kitchen, there were three bowls of porridge.  Goldilocks was hungry.  She tasted the porridge from the first bowl.');
// buttonOne('First bowl');
// buttonTwo('Second bowl');
// buttonThree('Third bowl');
// ​
// ​
// function tellStory(text) {
// document.getElementById('story').innerHTML = text;
// }
// ​
// function tellResponse(text) {
//     document.getElementById('response').innerHTML = text;
// }
// ​
// function buttonOne(text) {
//     document.getElementById('choiceOne').innerHTML = text;
//     //document.getElementById('choiceOne').addEventListener('click', bowlTooHot()); {
//  //   }
// }
// ​
// function buttonTwo(text) {
//     document.getElementById('choiceTwo').innerHTML = text;
// }
// ​
// function buttonThree(text) {
//     document.getElementById('choiceThree').innerHTML = text;
// }
document.getElementById('chapterOne').classList.toggle ('hide');    

document.getElementById('story').innerHTML = ('Once upon a time, there was a little girl named Goldilocks.  She  went for a walk in the forest. Pretty soon, she came upon a house.');
document.getElementById('choiceOne').addEventListener('click', function(){
    document.getElementById('response').innerHTML = ('The porridge is HOT')
});

document.getElementById('choiceTwo').addEventListener('click', function(){
    document.getElementById('response').innerHTML = ('The porridge is COLD')
});
document.getElementById('choiceThree').addEventListener('click', function(){
    
    document.getElementById('chapterOne').classList.toggle ('hide');
    document.getElementById('chapterTwo').classList.toggle ('hide');
});



 document.getElementById('story2').innerHTML = ('Ahhh, this porridge is just right. After she has eaten the three bears breakfasts she decided she was feeling a little tired.  So, she walked into the living room where she saw three chairs');
 document.getElementById('chairOne').addEventListener('click', function(){
  document.getElementById('response2').innerHTML = ('This chair is too big!')  
 });
document.getElementById('chairTwo').addEventListener('click', function(){
   document.getElementById('response2').innerHTML = ('This chair is too big, too!')
 });
document.getElementById('chairThree').addEventListener('click', function(){
    document.getElementById('chapterTwo').classList.toggle ('hide')
    document.getElementById('chapterThree').classList.toggle('hide')
});

document.getElementById('story3').innerHTML = ('Ahhh, this chair is just right," she sighed.  But just as she settled down into the chair to rest, it broke into pieces!Goldilocks was very tired by this time, so she went upstairs to the bedroom.  She lay down in the...');

document.getElementById('bedOne').addEventListener('click', function(){
    document.getElementById('response3').innerHTML = ('This bad is too hard for me!!')
});
document.getElementById('bedTwo').addEventListener('click', function(){
    document.getElementById('response3').innerHTML=('This bad is too soft for me !!!')
});
document.getElementById('bedThree').addEventListener('click', function(){
    
    document.getElementById('chapterThree').classList.toggle('hide')
    document.getElementById('chapterFour').classList.toggle('hide')
});

document.getElementById('story4').innerHTML = ('Then she lay down in the third bed and it was just right. As she was sleeping, the three bears came home.');
document.getElementById('tellingOne').addEventListener('click', function(){
    document.getElementById('response4').innerHTML = ('Someone s been eating my porridge,')
});
document.getElementById('tellingTwo').addEventListener('click', function(){
    document.getElementById('response4').innerHTML = ('Someone has been eating my porridge')
});
document.getElementById('tellingThree').addEventListener('click', function(){
    
    document.getElementById('chapterThree').classList.toggle('hide')
    document.getElementById('chapterFour').classList.toggle('hide')
});

