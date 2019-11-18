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
   

$(document).ready(function() {
    $(".select2").select2();
    $(".select2").select2({
        placeholder: "Категория",
        minimumResultsForSearch: -1
    });

    $("#form").hide();
    $("#back").hide();

    $("#hide").click(function() {
        $("#form").hide();
        $("#back").hide();
    });

    $("#show").click(function() {
        $("#form").show();
        $("#back").show();
    });
    
    $(".icheck-me").on("ifChecked", function(event){
        $(this).parent().parent().parent().children(".todo-text").css("text-decoration", "line-through");
        $(this).parent().parent().submit();
    });

    $(".icheck-me").on("ifUnchecked", function(event){
        $(this).parent().parent().parent().children(".todo-text").css("text-decoration", "none");
        $(this).parent().parent().submit();
    });

    $(".todo-text").click(function(){
        id = "#" + $(this).attr("id").substr(1);
        $(id).iCheck('toggle');
    });

});

function icheck(){
    if($(".icheck-me").length > 0){
      $(".icheck-me").each(function(){
        var $el = $(this);
        var opt = {
          checkboxClass: 'icheckbox_square-blue',
        }
        $el.iCheck(opt);
        if ($el.attr('checked')) {
            $el.parent().parent().parent().children(".todo-text").css("text-decoration", "line-through");
        }
      });
    }
}
  
$(function(){
    icheck();
})



