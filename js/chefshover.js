$('.row').on('mouseover', '.person', function(e) {
	let target = $(e.currentTarget);
	let role = target.find('.role');

	role.addClass('role-hover');

	role.on('mouseout', function(e) {
		let target = $(e.currentTarget);

		role.removeClass('role-hover');
  	role.off('mouseout');
	});
});
