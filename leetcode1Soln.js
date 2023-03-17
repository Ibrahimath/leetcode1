//Number one
// https://leetcode.com/problems/concatenation-of-array/
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
//Specifically, ans is the concatenation of two nums arrays.
//Return the array ans.

var getConcatenation = function(nums) {
    let ans = nums.concat(nums)
    return ans
};

   
   
   
   //number 2
   // https://leetcode.com/problems/find-the-highest-altitude/
   var largestAltitude = function(gain) {
    let output = [0]
     for(i=0;i<gain.length;i++){
         if(i===0){
             output.push(gain[0])
         }else{
             gain[i]=gain[i]+gain[i-1]
             output.push(gain[i])
     
         }
     } return Math.max(...output)
 };
   

   // Number 3
   //https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
// Question: There is a programming language with
// only four operations and one variable X:

//++X and X++ increments the value of the variable X by 1.
//--X and X-- decrements the value of the variable X by 1.
//Initially, the value of X is 0.


function finalValueAfterOperations (operations) {
    let count = 0
   operations.forEach(function (e){
       if(e === "X++" || e === "++X"){
           count++
       }else
       {count--}
   })
    return count
};




// Number 4 (wrongle written for most letters instead of words
// correct required code is directly below)
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
  var mostWordsFound = function(sentences) {
    let b=[]
  
    sentences.forEach(function(e){b.push(e.length)
    })
    return Math.max(...b)
};

   //Number 4
   //
    var mostWordsFound = function(sentences) {
    let b=[]
  
    sentences.forEach(function(e){b.push(e.split(" ").length)
    })
    return Math.max(...b)
  
};



  //Number 5
  https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
  var kidsWithCandies = function(candies, extraCandies) {
    let c =[]
   candies.forEach(
   function(e){
       if(Math.max(...candies) <= e+extraCandies){
           c.push(true)
       }else{c.push(false)}
   })
       return c}

      
    //NUmber 6
//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

    var arrayStringsAreEqual = function(word1, word2) {
        return word1.join("")== word2.join("")
    };

//Number 7
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort(function(a,b){
        return b-a
    })
    return (nums[0]-1)*(nums[1]-1)
};

// Number 8 
//https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
    let count = 0
    
    accounts.forEach(function(e){
        let eachTotal = 0
    e.forEach(function(el){
        eachTotal += el
    } )
    count = Math.max(count,eachTotal)
    })
    
    return count  
  };

// Number 9
//https://leetcode.com/problems/build-array-from-permutation/
var buildArray = function(nums) {
    let b =[]
    nums.forEach(function(el){
        b.push(nums[el])
    })
    return b
};

// Number 10
//https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function(nums) {
    let b=[]
   nums.forEach(function(e,i){

       b.push(e+ nums[i-1])
   })
   return b
};

//Number 11
//https://leetcode.com/problems/shuffle-the-array/
var shuffle = function(nums, n) {
    let shuffle1 = []
    for (i = 0; i< 0.5*nums.length; i++){
shuffle1.push(nums[i],nums[0.5*nums.length+i])

    }
   return shuffle1
};
