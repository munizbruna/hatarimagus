const areaKaminda = document.getElementById("kaminda");
const modalKaminda = document.getElementById("info-kaminda");

areaKaminda.addEventListener("click", function (e) {
  e.preventDefault(); // impede que o href="#" role a página para o topo
  modalKaminda.classList.add("ativo");
});

function fecharModal() {
    modalKaminda.style.display = 'none';
    location.reload();
}

modalKaminda.addEventListener('click', function() {
      fecharModal();
    });