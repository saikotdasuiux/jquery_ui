$( function() {
    $( "#draggable" ).draggable();
  } );

$( function() {
    $( "#draggable_1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

$( function() {
    $( "#resizable" ).resizable();
  } );

$( function() {
    $( "#selectable" ).selectable();
  } );

$(function() {
            $( "#sortable-1" ).sortable();
         });