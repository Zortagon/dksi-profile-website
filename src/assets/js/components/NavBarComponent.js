const navbarMenu = $("#navbar_menu");
const isNavbarMenuHidden = () => navbarMenu.hasClass("hidden");

export function NavBar() {
    $(".navbar-menu-button").on("click", function () {
        if (!isNavbarMenuHidden()) navbarMenu.toggleClass("hidden", true);
        else navbarMenu.toggleClass("hidden", false);
        $(this).toggleClass("active", !isNavbarMenuHidden());
    });
}
