$('#chefs-7').on('mouseover', '.chefs_person', function(e) {
	let target = $(e.currentTarget);
	let role = target.find('.chefs_role');

	role.addClass('roleHover');

	role.on('mouseout', function(e) {
		let target = $(e.currentTarget);

		role.removeClass('roleHover');
  	role.off('mouseout');
	});
});
