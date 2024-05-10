let nama = 'Clooney ' //tipe string
let usia = 12 //tipe integer or number
let tinggiBadan = 135.7 //tipe double float
let beratBadan
let pacar = 2

beratBadan = 36

if (pacar == null){
   pacar = 'belum punya'
} else {
    pacar = 'udah punya boss'
}

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang


alert(
    `nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya adalah ${beratBadan}kg dan pacar saya yaitu ${pacar}`
)
alert(`saldo awal saya sebesar Rp.${saldoAwal} & dan saldo tambahan untuk jajan es klim saya adalah sebesar Rp.${saldoTambahan} jadi total saldo saya setelah mendapatkan saldo tambahan
berjumlah Rp.${saldoAkhir}`,
)
