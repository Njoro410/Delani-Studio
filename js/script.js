  function submit() {
    var jina = document.getElementById("name").value;
    document.getElementById("outName").innerText = jina;
      
   } ;
   
   
   






















   $(document).ready(function() {

    $("#btn-sub").click(function() {
      $("#feedbackModal").modal('show');
    })
    $(".btn-close").click(function() {
      location.reload();
    })


    $("#design").click(function() {
      $(".wwd-description1").toggle();
      $(".wwd-icons1").toggle();
    })
    $("#development").click(function() {
      $(".wwd-icons2").toggle();
      $(".wwd-description2").toggle();
    })
    $("#product-management").click(function() {
      $(".wwd-icons3").toggle();
      $(".wwd-description3").toggle();
    })
    $("#work1").hover(function() {
      $("#project-name1").toggle();
    })
    $("#work2").hover(function() {
      $("#project-name2").toggle();
    });
    $("#work3").hover(function() {
      $("#project-name3").toggle();
    })
    $("#work4").hover(function() {
      $("#project-name4").toggle();
    })
    $("#work5").hover(function() {
      $("#project-name5").toggle();
    })
    $("#work6").hover(function() {
      $("#project-name6").toggle();
    })
    $("#work7").hover(function() {
      $("#project-name7").toggle();
    })
    $("#work8").hover(function() {
      $("#project-name8").toggle();
    })
  });

  
