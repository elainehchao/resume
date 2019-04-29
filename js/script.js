$(function () {
    $("#accordion").accordion({
        collapsible: true,
        active: false
    });

    $("#accordion").accordion("option", "icons", {
        'header': 'ui-icon-triangle-1-e',
        'activeHeader': 'ui-icon-triangle-1-s'
    });
});
