let noAngkot = 1;
let jmlAngkot = 10;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    document.write("angkot No." + noAngkot + " sedang beroperasi dengan baik. <br>");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    document.write("angkot No." + noAngkot + " sedang lembur. <br>");
  } else {
    document.write("angkot No." + noAngkot + " sedang tidak beroperasi. <br>");
  }
}
