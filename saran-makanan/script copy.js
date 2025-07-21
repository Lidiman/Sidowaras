// VIER
// localStorage.setItem("bmt", 2000)
const bmt = localStorage.getItem("bmt");
console.log(bmt);
const rentangBmt = document.getElementById("rentang-bmr");
const menuPagi = document.getElementById("pagi");
const menuSiang = document.getElementById("siang");
const menuMalam = document.getElementById("malam");
const menuSnack = document.getElementById("snack");
const menuKesimpulan = document.getElementById("kesimpulan");
const boxTitle = document.querySelectorAll(".box-title");

function bmtRange(bmt) {
    if (bmt === "null" || bmt === null) return ["Rentang BMR: ", 6];
    if (bmt > 3500) return ["You're too fat. Get a gym membership.", 5];
    if (bmt > 3000) return ["Rentang BMR: 3001 - 3500", 4];
    if (bmt > 2500) return ["Rentang BMR: 2501 - 3000", 3];
    if (bmt > 2000) return ["Rentang BMR: 2001 - 2500", 2];
    if (bmt > 1500) return ["Rentang BMR: 1501 - 2000", 1];
    if (bmt >= 1000) return ["Rentang BMR: 1000 - 1500", 0];
    if (bmt < 1000) {
      alert("Maaf, tidak menemukan saran menu makanan");
      window.location.href = '../index.html';
    } 
}

rentangBmt.innerHTML = bmtRange(bmt)[0];
// VIER END

// EZZAR
const menuHarian = [
  {
    rentang: 1, 
    totalKalori: 1150,
    menu: {
        pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)"],
        siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (1 gelas)", "Pisang (1 buah)"],
        malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (1 gelas)"],
        snack: "-",
        kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1150 kalori`
    }
  },
  {
    rentang: 2,
    totalKalori: 1625,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1625 kalori`
    }
  },
  {
    rentang: 3,
    totalKalori: 2142,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (2 ¼ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (2 ¼ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)", "Tempe (2 potong sedang)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)", "Kentang (1 buah sedang)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 2142 kalori`
    }
  },
  {
    rentang: 4,
    totalKalori: 2617,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (2 ¼ gelas)", "Ayam (2 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (2 ¼ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)", "Tempe (2 potong sedang)", "Krupuk Udang/Ikan (3 biji sedang)"],
      snack: ["Biskuit (4 buah besar)", "Kentang (1 buah sedang)", "Minyak Sawit (4 sendok teh)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 2617 kalori`
    }
  },
  {
    rentang: 5,
    totalKalori: 3142,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (2 ¼ gelas)", "Ayam (2 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (2 ¼ gelas)", "Daging Sapi (2 potong sedang)", "Kangkung (2 gelas)", "Tempe (2 potong sedang)", "Krupuk Udang/Ikan (6 biji sedang)"],
      snack: ["Biskuit (4 buah besar)", "Kentang (1 buah sedang)", "Minyak Sawit (6 sendok teh)", "Jagung (3 buah besar)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 3142 kalori`
    }
  }
];
// EZZAR END

// BAMA
const index = bmtRange(bmt)[1];
const menu = menuHarian[index];

function tampilkanMenu(waktu, elemen) {
  const items = menu.menu[waktu];

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = items[i];
    elemen.appendChild(li);
  }
}

if (menu) {
  tampilkanMenu("pagi", menuPagi);
  tampilkanMenu("siang", menuSiang);
  tampilkanMenu("malam", menuMalam);
  tampilkanMenu("snack", menuSnack);

  menuKesimpulan.innerHTML = menu.menu.kesimpulan;
} else {
  alert("We have no idea.");
}
// BAMA END