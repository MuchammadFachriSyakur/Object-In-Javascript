//Cara membuat objek
//1.Object Literal
const mahasiswa = {
  nama: "Fachri",
  energi: 5,
  makan: function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
    return this.energi;
  },
  main: function (jam){
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama}, Selamat Makan `);
    return this.energi;
  }
};
const mahasiswa2 = {
  nama: "ALDRIANO AUFA",
  energi: 5,
  makan: function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
    return this.energi;
  },
  main: function(jam){
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama} Selamat Main`);
    return this.energi;
  }
};
const mahasiswa3 = {
  nama: "Dio Adji Mujiono",
  energi: 6,
  makan: function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama},Selamat Makan`);
    return this.energi;
  },
  main: function(jam){
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama},Selamat main`);
    return this.energi;
  }
};

//2.Function Decralation
//Untuk membuat object kita harus menginisiasi dengan Cara Huruf dengan nama function berupa huruf Kapital.
function Mahasiswa(nama,porsi){
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = porsi;
  mahasiswa.makan = function (porsi){
    mahasiswa.energi = mahasiswa.energi + porsi;
    console.log(`Halo ${mahasiswa.nama}, Selamat Makan`);
    return mahasiswa.energi;
  };
  mahasiswa.main = function (jam){
    mahasiswa.energi = mahasiswa.energi - jam;
    console.log(`Halo ${mahasiswa.nama},Selamat Main`);
    return mahasiswa.energi;
  };
  return mahasiswa;
}
const rian =  Mahasiswa("ALDRIANO AUFA",10);
const fachri = Mahasiswa("Fachri",5);

//3.Constructur Function 
function siswa(nama,energi){
  this.nama = nama;
  this.energi = energi;
  this.makan = function(porsi){
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
    return this.energi;
  };
  this.main = function(jam){
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat Main`);
    return this.energi;
  };
}
const abid = new siswa("M.Abid Falih",10);
const harist = new siswa("M.Harist Abid",8);