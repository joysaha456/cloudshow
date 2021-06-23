/**
 * @Script js for (Template/Project Name)
 *
 * @project     - cloud show
 * @author      - cloud show
 * @created_by  - kawsar bin siraj
 * @created_at  - 08-11-2020
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code

});





/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // range slider
    if ($('#range').length) {
        $("#range").slider({
            range: "min",
            min: $("#range").data('min'),
            max: $("#range").data('max'),
            value: $("#range").data('init-value'),
            slide: function (e, ui) {
                return $(".ui-slider-handle").html(ui.value);
            }
        });
        $(".ui-slider-handle").html($("#range").data('init-value'));
    }


});