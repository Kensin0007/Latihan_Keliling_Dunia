function tambahWisata() {

    let wisata = prompt("Masukkan nama destinasi wisata");

    if (wisata !== null && wisata.trim() !== "") {

        let itemBaru = document.createElement("li");

        itemBaru.textContent = wisata;

        document.getElementById("listWisata").appendChild(itemBaru);

    }

}
