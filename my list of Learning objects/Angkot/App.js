
//Membuat Object dengan function declaration
function Angkot(sopir,trayek, penumpang,kas){
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
  this.penumpangNaik = (namaPenumpang)=>{
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  
  this.penumpangTurun = (namaPenumpang,bayar)=>{
    if(this.penumpang.length == 0){
      penumpang.push(namaPenumpang);
      return false;
    }
    for(let i = 0;i < this.penumpang.length;i++){
      if(this.penumpang[i] == namaPenumpang){
        this.penumpang[i] == "undefined";
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
  
} 

const angkotPertama = new Angkot("Parkur",["Medono","Pekajangan"],[],0);
