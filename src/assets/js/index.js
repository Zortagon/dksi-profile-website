import { topBarSwiper } from "./components/TopBarComponent";

import $ from "jquery";
import "remixicon/fonts/remixicon.css";
import "../css/tailwind-input.css";

const navbarMenu = $("#navbar_menu");
const isNavbarMenuHidden = () => navbarMenu.hasClass("hidden");

$(function () {
    topBarSwiper();
    $(".navbar-menu-button").on("click", function () {
        if (!isNavbarMenuHidden()) navbarMenu.toggleClass("hidden", true);
        else navbarMenu.toggleClass("hidden", false);
        $(this).toggleClass("active", !isNavbarMenuHidden());
    });
});
