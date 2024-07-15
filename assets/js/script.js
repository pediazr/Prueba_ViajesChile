$(function () {
  // tooltip
  $('[data-toggle ="tooltip"]').tooltip({
    boundary: "window",
    template:
      '<div class="tooltip tooltip-custom" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });

  // mensaje alerta
  $(document).ready(function () {
    $("#enviar").click(function () {
      alert("El Mensaje fue enviado correctamente...");
    });
  });

  // smooth scrolling
  $(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $("html,body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
});
