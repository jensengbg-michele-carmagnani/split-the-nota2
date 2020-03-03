
/*


const tip;
const sum;
const numberOfFriends;
const total;
const friendSum;
const sumDivided;
const calculatedTip;
const total; */


*/


document.getElementById('calculateButton').addEventListener('click', function() {
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;
    
    
    const calculatedTip = calculateTip(sum, tip);

    const sumDivided = showDividedSum(calculatedTip);

    const friendSum = divideTotal(total, numberOfFriends);

    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    
    
});




function calculateTip(sum, tip) {
   const total =  parseInt(sum) * parseFloat(tip);
   return total;
    
}
function showDividedSum(sum) {
    const sumDivided = parseInt(sum) + calculatedTip;
    return sumDivided;
    
    
}
 function divideTotal(total, numberOfFriends) {
   const friendSum = total / parseInt(numberOfFriends);
    return friendSum;

}














