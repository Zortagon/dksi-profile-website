import $ from "jquery";
import "../css/tailwind-input.css";

import { topBarSwiper } from "./components/TopBarComponent";

$(function () {
    topBarSwiper();
    $(".navbar-menu-button").on("click", function () {
        $(this).toggleClass("active");
    });
});
