 $(document).ready(function () {
        $('#sub-sub-menu').hide(); /* By default sub menu will hide */
        $('#sub-menu').mouseover(function () { /* When mouse is on  */
            $('#sub-sub-menu').show();
        });

        $('#sub-menu').mouseout(function () {
            $('#sub-sub-menu').hide();
        })
		$('#sub-sub-menu').mouseout(function () {
            $('#sub-sub-menu').hide();
        })
        $('#sub-sub-menu').mouseover(function () {
            $('#sub-sub-menu').show();
        })
    })