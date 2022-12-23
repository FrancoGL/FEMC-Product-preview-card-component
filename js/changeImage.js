export const changeImage = ($image) => {
    let currentWidth = window.innerWidth;
    if ( currentWidth >= 768) {
        $image.src = "./images/image-product-desktop.webp"
    } else {
        $image.src = "./images/image-product-mobile.webp"
    }
}