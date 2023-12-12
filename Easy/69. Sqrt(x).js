function mySqrt(x) {
  // newton raphson method
  let err = 1, sqr = x, sqri;

  if (x === 0) {
    return 0;
  }

  while (err > 0.0001) {
    sqri = (sqr + (x / sqr))/2;
    err = ((sqr-sqri)/sqr)*100; // absolute relative aproximation error.
    sqr = sqri;
    console.log(`approximation = ${sqr}, error = ${err}.`)
  }
  console.log(Math.floor(sqr));
  return Math.floor(sqr);

  // other solution
  // let result = 1;
  // while (result * result <= x) result++; // this is genius
  // console.log(result - 1);
  // return result - 1;

}

let x = 2147395599;
mySqrt(x);