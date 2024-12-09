window.onload = function() {
    $('.nb-menu').css('visibility', 'visible');
    $('.footer').css('visibility', 'visible');
    $('.nb-menu .right.menu,.nb-menu .item').transition({
        animation: 'fade down in',
        interval: 200,
    });
    $('.footer .container b,.footer .container small').transition({
        animation: 'fade up in',
        interval: 200,
    });
    $('.accordion,.cards .card,table,.table tr,.service-status h2').transition({
        animation: 'scale in',
        interval: 150
    });
}
