
/*


const tip;
const sum;
const numberOfFriends;
const total;
const friendSum;
const sumDivided;
const calculatedTip;
const total; 



*/

function calculateTip(sum, tip) {
    const calculatedTip =  parseInt(sum) * parseFloat(tip);
    return calculatedTip;
     
 }

 function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
     return sumDivided;
 
 }
 function showDividedSum(sum) {
     document.getElementById('showSum').classList.toggle('hide');
     document.getElementById('inputForm').classList.toggle('hide');
     document.getElementById('friendSum ').innerHTML = sum + ' kr';
    // const sumDivided = parseInt(sum) + calculatedTip;
    // return sumDivided;
    
    
}
document.getElementById('calculateButton').addEventListener('click', function() {
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;
    const calculateTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculateTip;
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);


    
    
    
    
    
});





















