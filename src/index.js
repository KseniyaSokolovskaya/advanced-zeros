module.exports = function getZerosCount(number, base) {
 var prime, notation, a, maxPrime, count, zerosCount  ;
 notation = base;
 var prime = [];
 var a = 2;
 	 for (var i = 2; i <= notation; i++) {
  		while(notation % i === 0){
  			prime.push(i);
  			notation = notation/i;
  		}
  	}
 maxPrime = Math.max.apply(null, prime);
 count = 0;
 for (var i = 0; i < prime.length; i++) {
 	if(prime[i] === maxPrime){
 		count++;
 	}
 }
 // console.log(prime, maxPrime, count);
 zerosCount = 0;
 for (var i = maxPrime; i <= number; i += maxPrime) {
 	var y = i;
 		while( y % maxPrime === 0) {
 			y = y / maxPrime;
 			zerosCount++;
 		}
 	}
 	return Math.floor(zerosCount/count);

}

