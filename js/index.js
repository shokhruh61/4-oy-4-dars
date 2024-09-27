
// 1. Musbat yoki manfiy sonni aniqlash
let son = prompt("Son kiriting:");
if (son > 0) {
    console.log("Musbat");
} else {
    console.log("Manfiy");
}

/*// 2. Sonning juft yoki toq ekanligini aniqlash
son = prompt("Son kiriting:");
if (son % 2 == 0) {
    console.log("Juft");
} else {
    console.log("Toq");
}

// 3. Ikki sonni taqqoslash
let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");
if (son1 > son2) {
    console.log("Katta");
} else if (son1 == son2) {
    console.log("Teng");
} else {
    console.log("Kichik");
}

// 4. To'rtburchakning kvadrat ekanligini aniqlash
let uzunlik = prompt("Uzunlikni kiriting:");
let en = prompt("Enni kiriting:");
if (uzunlik == en) {
    console.log("Kvadrat");
} else {
    console.log("Kvadrat emas");
}

// 5. Haroratni baholash
let harorat = prompt("Haroratni kiriting:");
if (harorat > 0) {
    console.log("Yozgi");
} else {
    console.log("Qishki");
}

// 6. Baho chiqarish
let baho = prompt("Bahoni kiriting (1-5):");
if (baho == 5) {
    console.log("A'lo");
} else if (baho == 4) {
    console.log("Yaxshi");
} else if (baho == 3) {
    console.log("Qoniqarli");
} else {
    console.log("Yomon");
}

// 7. Maksimal sonni aniqlash
son1 = prompt("1-sonni kiriting:");
son2 = prompt("2-sonni kiriting:");
let son3 = prompt("3-sonni kiriting:");
console.log("Eng katta son:", Math.max(son1, son2, son3));

// 8. Besh xonali sonni aniqlash
son = prompt("Son kiriting:");
if (son.length == 5) {
    console.log("Besh xonali");
} else {
    console.log("Besh xonali emas");
}

// 9. Yil faslini aniqlash
let oy = prompt("Oyni kiriting (1-12):");
if (oy >= 3 && oy <= 5) {
    console.log("Bahor");
} else if (oy >= 6 && oy <= 8) {
    console.log("Yoz");
} else if (oy >= 9 && oy <= 11) {
    console.log("Kuz");
} else {
    console.log("Qish");
}

// 10. Ishchi kun yoki dam olish kuni
let haftaKuni = prompt("Haftaning kunini kiriting (1-7):");
if (haftaKuni >= 1 && haftaKuni <= 5) {
    console.log("Ishchi kun");
} else {
    console.log("Dam olish kuni");
}

// 11. Foydalanuvchining yoshini aniqlash
let yil = prompt("Yilingizni kiriting:");
if (yil >= 2005) {
    console.log("Yosh bola");
} else {
    console.log("Katta odam");
}

// 12. To'liq yoki qisman bo'lg'usi soat
let soat = prompt("Soatni kiriting (0-24):");
if (soat >= 8 && soat <= 18) {
    console.log("Ish vaqti");
} else {
    console.log("Tanaffus");
}

// 13. Agar raqam berilgan bo'lsa
let qiymat = prompt("Qiymat kiriting:");
if (!isNaN(qiymat)) {
    console.log("Bu raqam");
} else {
    console.log("Bu raqam emas");
}

// 14. Ko'p sonli katta yoki kichik son
son1 = prompt("Birinchi sonni kiriting:");
son2 = prompt("Ikkinchi sonni kiriting:");
if (son1 > 100) {
    console.log("Katta son");
} else {
    console.log("Kichik son");
}

// 15. Tekin kirish
let yosh = prompt("Yoshingizni kiriting:");
if (yosh < 18) {
    console.log("Tekin kirish");
} else {
    console.log("Pul to'lash kerak");
}
*/