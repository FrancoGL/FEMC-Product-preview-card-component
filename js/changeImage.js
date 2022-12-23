let currentWidth = window.innerWidth;
const pathToDesktopVersion =  "./images/image-product-desktop.webp";
const pathToMobileVersion = "./images/image-product-mobile.webp";

export const changeImage = ($image) => {

    if ( currentWidth >= 768) {
        $image.src = pathToDesktopVersion
    }
    if (currentWidth < 768 && $image.src !== pathToMobileVersion) {
        $image.src = pathToMobileVersion
    }
}