(function($) {
	$('.collapse').on('show.bs.collapse, shown.bs.collapse', function(event) {
		$('.material-icons[data-toggle="collapse"][data-target="#' + $(this).attr('id') + '"], [data-toggle="collapse"][data-target="#' + $(this).attr('id') + '"] .material-icons').text('arrow_drop_up');
	});
	
	$('.collapse').on('hide.bs.collapse, hidden.bs.collapse', function(event) {
		$('.material-icons[data-toggle="collapse"][data-target="#' + $(this).attr('id') + '"], [data-toggle="collapse"][data-target="#' + $(this).attr('id') + '"] .material-icons').text('arrow_drop_down');
	});
	
	$('.sortable').sortable({
		appendTo:				'parent',
		cursor:					'move',
		handle:					'.moveable',
		dropOnEmpty:			false,
		forceHelperSize:		false,
		forcePlaceholderSize:	false,
		helper:					'original',
		items:					'> li',
		placeholder: {
			element: function(currentItem) {
				return $('<div class="sortable-placeholder"><div class="card m-2">Drop here</div></div>')[0];
			},
			update: function(container, p) {
				return;
			}
		},
		scroll:					false,
		beforeStop:				function onBeforeClose(event, ui) {
			$('body').removeClass('sortable');
		},
		start:					function onStart(event, ui) {
			$('body').addClass('sortable');
			ui.placeholder.addClass('col-6');
		}
	});
}(jQuery));