
  /*----------------------------------------------------*/
  /*  Contact Form Section
  /*----------------------------------------------------*/
  $("#contact").submit(function(e) {
    $("submitt").prop("disabled",true);
    document.getElementById("submitt").style.pointerEvents = "none";
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var text = $("#text").val();
    var gatext = text;
  

  
    text = text.replace(/\"/gi, "|");
  
    text = text.replace(/(\r\n|\n|\r)/gi, ". ");
  
    text = encodeURIComponent(text);
  
    // alert(gatext);
  
    var dataString =
      "q_name2=" +
      name +
      "&q_email2=" +
      email +
      "&c_phone=" +
      phone +
      "&q_message2=" +
      gatext;
  

  
    ga_calling("JS Submit Pressed", dataString);
    e.preventDefault();
  
  
    $(".loading-mask").show();
  
    //remove iframe from contact div
    $("#contact iframe").remove();
  
    function isValidEmail(emailAddress) {
      var pattern = new RegExp(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
      );
      return pattern.test(emailAddress);
    }
  
    function isValidPhone(phone) {
      var pattern = new RegExp(/^[0-9-]/i);
      return pattern.test(phone);
    }
  
    if (isValidEmail(email) && text.length >= 10 && name.length > 1) {
      var country = localStorage.getItem("country");
      $.ajax({
        type: "GET",
        url:
          "https://n9u3n7tc8g.execute-api.us-east-1.amazonaws.com/Fstagging/helloworld?key1=" +
          name +
          "&key2=" +
          email +
          "&key3=" +
          phone +
          "&key4=" +
          text +
          "&key5=" +
          country +
          "&key6=" +
          window.location.href,
        error: function() {
          $(".loading-mask").hide();
  
          ga_calling("Quote Request", dataString);
		  gtag_report_conversion();

          $(".success")
          .fadeIn(1000)
          .delay(5000)
          .fadeOut(1000);


          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("text").value = "";
          document.getElementById("submitt").style.pointerEvents = "all";
      
        },
        success: function(data) {

          $(".loading-mask").hide();

          ga_calling("Quote Request", dataString);
		  gtag_report_conversion();

          $(".success")
          .fadeIn(1000)
          .delay(5000)
          .fadeOut(1000);


          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("text").value = "";
          document.getElementById("submitt").style.pointerEvents = "all";
         
        }
      });
    } else {
        document.getElementById("submitt").style.pointerEvents = "all";
      $(".loading-mask").hide();
  
      //email validation error
      if (!isValidEmail(email))
        $(".error").html("Please enter valid email address");
      else if (0) $(".error").html("Please enter valid Phone Number");
      else if (text.length < 10)
        $(".error").html("Message text should be at least 10 characters");
      else if (name.length <= 1)
        $(".error").html("Name should be at least of 2 characters");
  
      $(".error")
        .fadeIn(1000)
        .delay(5000)
        .fadeOut(1000);
    }
  
    return false;
  });
  

  /* For click events on all fields*/
  var evt_field_c1 = true;
  var evt_field_c2 = true;
  var evt_field_filled_c2 = true;
  var evt_field_c3 = true;
  var evt_field_c4 = true;
  
  $("#name").focus(function() {
    if (evt_field_c1 == true) {
      ga_calling("Clicked 1 Name Field", "");
      evt_field_c1 = false;
    }
  });
  
  $("#email").focus(function() {
    if (evt_field_c2 == true) {
      ga_calling("Clicked 2 Email Field", "");
      evt_field_c2 = false;
    }
  });
  
  $("#email").blur(function() {
    if ($(this).val() != "") {
      ga_calling("Clicked 2.2 Email Filled", $("#email").val());
      // evt_field_filled_c2 = false;
    }
  });
  
  $("#phone").focus(function() {
    if (evt_field_c3 == true) {
      ga_calling("Clicked 3 Phone Field", "");
      evt_field_c3 = false;
    }
  });
  
  $("#text").focus(function() {
    if (evt_field_c4 == true) {
      ga_calling("Clicked 4 Message Field", "");
      evt_field_c4 = false;
    }
  });
  
  function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    var a = re.test(email);
    if (a) {
      //ga_calling('Clicked 2.2 Email Filled', email);
    }
  }
  /* For click event on heder links */
  function EventOnLoad() {
    //ga_calling('0. Landed on Page', '');
    ga_calling("Landed on Page", "");
  }
  function ga_calling(type, data) {
    var page_url = $(location).attr("href"); //"http://games.geniteam.com"
    ga("send", "event", "nftgames.geniteam.com", type, page_url + " - " + data, 1);
  }
  /* For Scroll to specific Section */
  
  var evt_show_1 = true;
  var evt_show_2 = true;
  var evt_show_3 = true;
  var evt_show_4 = true;
  var evt_show_5 = true;
  var evt_show_6 = true;
  var evt_show_7 = true;
  var enabledScrollEvent = true;
  
  $(".why-opt").appear(function() {
    if (evt_show_1 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 1. why opt", "");
    evt_show_1 = false;
  });
  $(".ntf-games").appear(function() {
    if (evt_show_2 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 2. Ntf Games", "");
    evt_show_2 = false;
  });
  $(".services").appear(function() {
    if (evt_show_3 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 3. Services", "");
    evt_show_3 = false;
  });
  $(".faqs").appear(function() {
    if (evt_show_5 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 4. Faqs", "");
    evt_show_5 = false;
  });
  $(".recent-posts").appear(function() {
    if (evt_show_4 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 5. Recent Posts", "");
    evt_show_4 = false;
  });
  $(".contact").appear(function() {
    if (evt_show_6 == true && enabledScrollEvent == true)
      ga_calling("Start Showing: 6. Contact", "");
    evt_show_6 = false;
  });

  

  
  function tp_link(data, section) {
    enabledScrollEvent = false;
    console.log("Stop Event Log");
    setTimeout(function() {
      enabledScrollEvent = true;
    }, 2000);
    ga_calling(data, "");
  }
  
