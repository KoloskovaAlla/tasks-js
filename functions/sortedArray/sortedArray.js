/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  let resultArrayIndex = nums1.length - 1;
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[resultArrayIndex] = nums1[index1];
      index1--;
    }
    else {
      nums1[resultArrayIndex] = nums2[index2];
      index2--;
    }
    resultArrayIndex--;
  };

  while (index2 >= 0) {
    nums1[resultArrayIndex] = nums2[index2];
    index2--;
    resultArrayIndex--;
  }

  console.log(nums1);
  return nums1;
};

module.exports = merge;

merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4);
