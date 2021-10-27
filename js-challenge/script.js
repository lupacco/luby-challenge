function challengeOne(n, s) {
  let newArr = [];
  for (i = 0; i < n; i++) {
    newArr.push(s);
  }
  return newArr;
}
console.log(challengeOne(6, "a"), "ChallengeOne OK!");

function challengeTwo(a) {
  let newArr = [];
  let current = a.length - 1;
  while (current >= 0) {
    newArr.push(a[current]);
    current--;
  }
  return newArr;
}
console.log(challengeTwo([1, 2, 3, 4, 5, 6, 7]), "ChallengeTwo OK!");

function challengeThree(a) {
  let newArr = [];
  for (i = 0; i < a.length - 1; i++) {
    if (a[i] != false && a[i] != null && a[i] != "" && a[i] != 0) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}
console.log(challengeThree([1, 2, null, undefined, 0, 0]), "ChallengeThree OK!");

function challengeFour(m) {
  for (i in m) {
    if (m[i].length != 2) {
      return -1;
    }
  }
  let obj = {};
  m.forEach((current) => {
    obj[current[0]] = current[1];
  });
  return obj;
}
console.log(
  challengeFour([
    ["c", 4],
    ["d", 6],
  ])
, "ChallengeFour OK!");

function challengeFive(arr, n, m) {
  let newArr = [];
  for (i in arr) {
    if (arr[i] != n && arr[i] != m) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(challengeFive([5, 4, 3, 2, 5], 5, 3), "ChallengeFive OK!");

function challengeSix(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) == index);
}
console.log(challengeSix([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]), "ChallengeSix OK!");

function challengeSeven(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (i in arr1) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(challengeSeven([1, 2, 3, 4], [1, 2, 3, 4]), "ChallengeSeven OK!");

function challengeEight(arr) {
  let newArr = [];
  for (i in arr) {
    if (typeof arr[i] == "object") {
      for (j in arr[i]) {
        newArr.push(arr[i][j]);
      }
    }
    if (typeof arr[i] == "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(challengeEight([1, 2, [3], [4, 5], 6, [7, 8, 9]]), "ChallengeEight OK!");

function challengeNine(arr, n) {
  let newArr = [];
  while(arr.length != 0){
    newArr.push(arr.splice(0, n))
  }
  return newArr;
}
console.log(challengeNine([1, 2, 3, 4, 5], 2), "ChallengeNine OK!");

function challengeTen(arr1, arr2) {
  let newArr = [];
  for (i in arr1) {
    for (j in arr2) {
      if (arr1[i] == arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}
console.log(challengeTen([6, 8], [8, 9]), "ChallengeTen OK!");
