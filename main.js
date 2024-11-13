// 1. Membuat fungsi hello dengan 2 argumen: name dan origin
function hello(name, origin = "Bandung") {
    // 2. Mengembalikan string sesuai dengan template yang diberikan
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

// 4. Membuat variabel rahmat dengan hasil pemanggilan fungsi hello
const rahmat = hello("Rahmat", "Semarang");

// 5. Membuat variabel indra dengan hasil pemanggilan fungsi hello tanpa memberikan nilai origin
const indra = hello("Indra");

// Menampilkan hasil
console.log(rahmat);  // Output: Halo! Nama saya Rahmat. Saya tinggal di Semarang.
console.log(indra);   // Output: Halo! Nama saya Indra. Saya tinggal di Bandung.
