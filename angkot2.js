let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;
while (noAngkot <= angkotBeroperasi) {
  document.write("angkot No." + noAngkot + " beroperasi dengan baik. <br>");

  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  document.write("angkot No." + noAngkot + " sedang tidak beroperasi dengan baik. <br>");
}
