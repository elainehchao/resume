$(function () {
    $("#accordion").accordion({
        collapsible: true,
        active: 0,
        heightStyle: "content"
    });

    $("#accordion").accordion("option", "icons", {
        'header': 'ui-icon-triangle-1-e',
        'activeHeader': 'ui-icon-triangle-1-s'
    });
});
