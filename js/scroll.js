	  $(document).ready(function() {
	    $("a.ancLinks").click(function () { 
	      var elementClick = $(this).attr("href");
	      var destination = $(elementClick).offset().top;
	      $('html,body').animate( { scrollTop: destination }, 1100 );
	      return false;
	    });
	  });