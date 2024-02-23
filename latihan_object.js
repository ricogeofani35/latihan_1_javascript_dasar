function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (nmPenumpang) {
    this.penumpang.push(nmPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (nmPenumpang, bayar) {
    if (this.penumpang.length == []) {
      console.log("angkot masih kosong!");
      return false;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == nmPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}

let angkot1 = new Angkot("rico geofani", "tuban-babat", [], 0);
let angkot2 = new Angkot("aldo firmansyah", "belimbing-semanding", [], 0);
