$(document).ready(function () {
    $("#gato-hero").hover(function () {
        console.log("Paso el mouse sobre")
        $(this).css({
            "transform": "scale(1.3)",
            'border-bottom': "1px solid white",
            'transition': "all 2s ease",
            "margin-bottom": "3rem"
        });
    });
    $("#yo").click(function () {
        console.log("Clickeado")
        $("#left").slideDown("slow");
        $("#rigth").slideDown("slow");
        $("#img-yo").slideDown("slow");
    });
});