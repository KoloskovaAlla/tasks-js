const typeOf = (a) => {
  const overtaking = a;
  const bigOvertaking = BigInt(a);



  const result = Number(overtaking);
  if (Number(overtaking) >= Number.MIN_SAFE_INTEGER && Number(overtaking) <= Number.MAX_SAFE_INTEGER) {
    console.log('overtaking');
    // console.log(overtaking);
  }
  else {
    console.log('bigOvertaking');
    // console.log(Number(bigOvertaking));
    // console.log(typeof Number(bigOvertaking));
  };
};

typeOf(14545646456466545465454);