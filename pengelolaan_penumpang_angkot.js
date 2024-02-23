let penumpang = [];
let tambahPenumpang = function (nmPenumpang, penumpang) {
  if (penumpang.length == []) {
    penumpang.push(nmPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = nmPenumpang;
        return penumpang;
      } else if (penumpang[i] == nmPenumpang) {
        console.log("penumpang sudah ada!");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(nmPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (nmPenumpang, penumpang) {
  if (penumpang.length == []) {
    console.log("angkot masih kosong!");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nmPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log("nama penumpang tidak ada!");
        return penumpang;
      }
    }
  }
};
