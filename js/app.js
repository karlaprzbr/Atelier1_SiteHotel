
//app var
var app = {};

(function($){
 "use strict";


/*************************
 Predefined Variables
*************************/

 var $window = $(window),
 $document = $(document);

// Segmenter ses différentes app en fonction de leur type d'intervention sur le DOM

 app.event = function () {
   // Navigation
   $('#burger').click(function() {
     $('#nav').show(300);
   });
   $('#cross').click(function() {
     $('#nav').hide(300);
   });

   // Animation fleche

   $(document).ready(setInterval(function(){
    $('#down-arrow').animate({
      bottom: '20px'
    }, 1000);
    $('#down-arrow').animate({
      bottom: '50px'
    }, 1500);
   }, 200));

   // Animation cloche

   $(document).ready(setInterval(function(){
    $('#bell').animate({ deg: 45},
      {
        duration: 200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
    $('#bell').animate({ deg: -45},
      {
        duration: 200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
    $('#bell').animate({ deg: 0},
      {
        duration: 200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }); 
   }, 3000));

   // Formulaire de la page avis
   $(document).ready(function() {
     var popUps = $('.popUp');
     for (var i = 0; i < popUps.length; i++) {
       $('.popUp').hide();
     }
   });

   $('#submitComment').click(function(evt){
     evt.preventDefault();
     if ($('#firstName').val().length >= 1 && $('#lastName').val().length >= 1 && $('#customerNote option:selected') && $('#commentTitle').val().length >= 1 && $('#commentContent').val().length >= 1) {
       // Ajout du commentaire sur la page
       var comment1 = '<div class="row avis"><div><h4>'+$('#commentTitle').val()+'</h4>';
       var comment2 = '';
       switch ($('#customerNote').val()) {
          case 'one':
            comment2 = '<p><i class="fas fa-star"></i></p>';
            break;
          case 'two':
            comment2 = '<p><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
            break;
          case 'three':
            comment2 = '<p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
            break;
          case 'four':
            comment2 = '<p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
            break;
          case 'five':
            comment2 = '<p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
            break;
         default:
       }
       var comment3 = '<p>' +$('#firstName').val()+' '+$('#lastName').val()+'</p><p>'+$('#commentContent').val()+'</p><hr>';
       var commentTotal = comment1 + comment2 + comment3;
       $('.avis').first().before(commentTotal);
       $('.incorrect').hide();
       $('.correct').show();
     } else {
       $('.incorrect').show();
     }
   });

   // Formulaire de la page hotel
   $('#submitMessage').click(function(evnt){
     evnt.preventDefault();
     if($('#contactFirstName').val().length >= 1 && $('#contactLastName').val().length >= 1 && $('#contactMessage').val().length >= 1) {
       console.log('ça marche');
       $('.correct').show();
       $('.incorrect').hide();
     } else {
       $('.incorrect').show();
     }
   });

 }

 //Document ready functions
 $document.ready(function () {
   app.event();
 });

})(jQuery);
