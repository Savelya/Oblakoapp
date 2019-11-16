// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require_tree .
//= require_self
//= require 'icheck'
//= require bootstrap-sprockets
   

$(document).ready(function() {
    $("#form").hide();
    $("#hide").click(function() {
        $("#form").hide();
        $("#show").show();
    });
    $("#show").click(function() {
        $("#form").show();
        $("#show").hide();
    });
    
    $(".icheck-me").on("ifChecked", function(event){
        $(this).parent().parent().children(".todo-text").css("text-decoration", "line-through");
    });

    $(".icheck-me").on("ifUnchecked", function(event){
        $(this).parent().parent().children(".todo-text").css("text-decoration", "none");
    });

});

function icheck(){
    if($(".icheck-me").length > 0){
      $(".icheck-me").each(function(){
        var $el = $(this);
        var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
        color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
        var opt = {
          checkboxClass: 'icheckbox' + skin + color,
        }
        $el.iCheck(opt);
      });
    }
}
  
$(function(){
    icheck();
})



