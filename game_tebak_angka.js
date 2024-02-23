let kesempatan = 3;

while (kesempatan > 0) {
  let tebak = parseInt(prompt("tebak angka 1 - 10: "));
  let angka = Math.floor(Math.random() * 10);
  let hasil = "";
  console.log(angka);

  if (tebak === angka) {
    hasil = "Tebahkan Anda BENAR";
    kesempatan = 1;
  } else {
    if (tebak > angka) {
      hasil = "Tebahkan Terlalu Tinggi";
    } else {
      hasil = "Tebahkan Terlalu Rendah";
    }
  }

  alert(hasil);

  kesempatan--;
  if (kesempatan != 0) {
    alert("Kesempatan Masih: " + kesempatan);
  } else {
    alert("Kesempatan Sudah Habis, GOOD BYE");
  }
}
