// const sum = require("./module/sum.js");
// console.log(sum(2, 10));
$( function() {
    
    if (localStorage.getItem("myKey")) {
        var stored_select = localStorage.getItem("myKey");
        $('#' + stored_select).prop( "selected", true );
        $('.' + stored_select).show();
        } else {
    $('.Lekki').show();
    }
    });
     
    $("#selectlocation").change(function(){
        $('.select-menu-location').find('div').hide();
        var selected = $('#selectlocation option:selected').attr('id');
        localStorage.setItem("myKey", selected);
        $('.' + selected).show();
    });
// Property =================================
$( function() {
 
   if (localStorage.getItem("myKeys")) {
       var stored_select = localStorage.getItem("myKeys");
       $('#' + stored_select).prop( "selected", true );
       $('.' + stored_select).show();
       } else {
   $('.House').show();
   }
   });
    
   $("#selectproperty").change(function(){
       $('.select-menu-property').find('div').hide();
       var selected = $('#selectproperty option:selected').attr('id');
       localStorage.setItem("myKeys", selected);
       $('.' + selected).show();
   }); 
//    price =========================
$( function() {
 
   if (localStorage.getItem("myKeyq")) {
       var stored_select = localStorage.getItem("myKeyq");
       $('#' + stored_select).prop( "selected", true );
       $('.' + stored_select).show();
       } else {
   $('.one').show();
   }
   });
    
   $("#selectprice").change(function(){
       $('.select-menu-price').find('div').hide();
       var selected = $('#selectprice option:selected').attr('id');
       localStorage.setItem("myKeyq", selected);
       $('.' + selected).show();
   }); 