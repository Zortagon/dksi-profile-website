import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function topBarSwiper() {
    return new Swiper(".topBarSwiper-container", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
    });
}
