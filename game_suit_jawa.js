let pilihan = true;

while (pilihan) {
  // menangkap pilihan player
  let player = prompt("pilih: gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  let compt = Math.random(); //0 - 1

  if (compt < 0.34) {
    // 1 / 1/3
    compt = "gajah";
  } else if (compt >= 0.34 && compt < 0.67) {
    //antara 0.34 - 0.67
    compt = "orang";
  } else {
    //> 0.67
    compt = "semut";
  }

  let hasil = "";
  // menentukan rules
  if (player == compt) {
    hasil = "SERI";
  } else if (player == "gajah") {
    compt == "orang" ? (hasil = "MENANG") : (hasil = "KALAH");
  } else if (player == "semut") {
    compt == "gajah" ? (hasil = "MENANG") : (hasil = "KALAH");
  } else if (player == "orang") {
    compt == "semut" ? (hasil = "MENANG") : (hasil = "KALAH");
  } else {
    hasil = "pilihan tidak ada";
  }

  // tampilkan hasilnya
  alert("pilihan player: " + player + " pilihan computer: " + compt + " Hasil : " + hasil);

  pilihan = confirm("main lagi?");
}
