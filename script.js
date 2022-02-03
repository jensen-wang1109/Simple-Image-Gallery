const con = document.querySelector('.container');
const jmb = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
con.addEventListener('click', function(e){
    if(e.target.className == 'thumb') {
        jmb.src = e.target.src;
        jmb.classList.add('fade');
        setTimeout(function(){
            jmb.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
});