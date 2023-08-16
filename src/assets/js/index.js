import $ from "jquery";
import "../css/tailwind-input.css";

$(".navbar-menu-button").on("click", function () {
    $(this).toggleClass("active");
});
