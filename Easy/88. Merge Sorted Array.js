function merge(nums1, m, nums2, n) {
  // insertion sort
  // let a = nums1;
  // let b = nums2;
  // let c = [];
  // let d = [];
  // let i, j, k, l=0, point;

  // for (let z = 0; z < m ; z++) {
  //   d[z] = a[z];
  // }
  // a = d;

  // for (k=0; k < (a.length + b.length); k++){
  //   c[k] = a[l];
  //   c[k+1] = b[l];
  //   k++;
  //   l++;
  // }

  // for (i = 1; i < c.length; i++) {
  //   point = c[i];
  //   j = i - 1;

  //   while (j >= 0 && c[j] > point) {
  //     c[j + 1] = c[j];
  //     j = j - 1;
  //   }
  //   c[j + 1] = point;
  // }
  // return c; 

  // Two pointer
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }

    if (k < 0) break;
  }

  // console.log(`${nums1}, k = ${k}, i = ${i}, j = ${j}`);
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, m, nums2, n))