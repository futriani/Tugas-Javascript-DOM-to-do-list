
// MENGAMBIL ELEMENT DARI HTML

const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");

const pesanPeringatan =
    document.getElementById("pesanPeringatan");

const daftarTugas =
    document.getElementById("daftarTugas");

const pesanKosong =
    document.getElementById("pesanKosong");

const totalTugas =
    document.getElementById("totalTugas");

const tugasSelesai =
    document.getElementById("tugasSelesai");

const tugasBelum =
    document.getElementById("tugasBelum");


// FUNGSI MENGHITUNG JUMLAH TUGAS

function hitungTugas() {

    // Mengambil semua tugas
    const daftarSemua =
        daftarTugas.querySelectorAll("li");

    // Mengambil tugas yang sudah selesai
    const jumlahSelesai =
        daftarTugas.querySelectorAll(".completed");


    // Menampilkan jumlah semua tugas
    totalTugas.innerText =
        daftarSemua.length;


    // Menampilkan jumlah tugas selesai
    tugasSelesai.innerText =
        jumlahSelesai.length;


    // Menghitung tugas yang belum selesai
    tugasBelum.innerText =
        daftarSemua.length - jumlahSelesai.length;
}

// FUNGSI MENAMBAHKAN TUGAS

function tambahTugas() {

    // Mengambil isi input
    const teksTugas =
        inputTugas.value.trim();


    // CEK APAKAH INPUT KOSONG

    if (teksTugas === "") {

        pesanPeringatan.innerText =
            "Tugas tidak boleh kosong.";

        inputTugas.focus();

        return;
    }


    // Menghapus pesan peringatan
    pesanPeringatan.innerText = "";

    // MEMBUAT ELEMENT TUGAS
    
    const tugasBaru =
        document.createElement("li");


    // Membuat checkbox
    const ceklisTugas =
        document.createElement("input");

    ceklisTugas.type = "checkbox";


    // Membuat teks tugas
    const teksTugasBaru =
        document.createElement("span");

    teksTugasBaru.innerText =
        teksTugas;


    // Membuat tombol hapus
    const btnHapus =
        document.createElement("button");

    btnHapus.innerText =
        "Hapus";


    // SAAT CHECKBOX DICENTANG

    ceklisTugas.addEventListener(
        "change",
        function () {

            // Menambahkan atau menghapus
            // class completed
            tugasBaru.classList.toggle(
                "completed"
            );


            // Menghitung ulang tugas
            hitungTugas();
        }
    );

    // SAAT TOMBOL HAPUS DIKLIK

    btnHapus.addEventListener(
        "click",
        function () {

            // Menghapus tugas
            tugasBaru.remove();


            // Menghitung ulang tugas
            hitungTugas();


            // Jika tidak ada tugas
            if (daftarTugas.children.length === 0) {

                pesanKosong.style.display =
                    "block";
            }
        }
    );

    // MEMASUKKAN ELEMENT KE DALAM LI

    tugasBaru.appendChild(
        ceklisTugas
    );

    tugasBaru.appendChild(
        teksTugasBaru
    );

    tugasBaru.appendChild(
        btnHapus
    );


    // Menambahkan tugas ke daftar
    daftarTugas.appendChild(
        tugasBaru
    );

    // MEMBERSIHKAN INPUT
    

    inputTugas.value = "";

    inputTugas.focus();


    // Menyembunyikan pesan tugas kosong
    pesanKosong.style.display =
        "none";


    // Menghitung jumlah tugas
    hitungTugas();
}

// TOMBOL TAMBAH

btnTambah.addEventListener(
    "click",
    tambahTugas
);


// MENAMBAHKAN TUGAS DENGAN ENTER

inputTugas.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            tambahTugas();
        }
    }
);

// MENJALANKAN PERHITUNGAN AWAL

hitungTugas();