export const changeImage = ($image) => {
    let currentWidth = window.innerWidth;
    if ( currentWidth => 768) {
        $image.src = "../images/image-product-desktop.jpg"
    } else {
        $image.src = "../images/image-product-mobile.jpg"
    }
}