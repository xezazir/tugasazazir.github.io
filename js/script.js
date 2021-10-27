// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
    


    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindah scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50 
    }, 700, 'swing');

    e.preventDevault();
    
});