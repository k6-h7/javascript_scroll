// JavaScript
//console.log('Hello world!');

/* // 実行する機能
const show = (entries) => {
    // console.log(entries[0].target);
    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0]
    }
    entries[0].target.animate(keyframes, 600);
}

//監視機能の設置
const observer = new IntersectionObserver(show);

//監視対象の指示
observer.observe(document.querySelector('#img01')); */

const show = (entries, obs) => {
    entries.forEach((entry) => {
        //交差している時だけ
        if(entry.isIntersecting){
            const keyframes = {
                opacity: [0, 1],
                translate: ['0 70px', 0]
            }
            entries[0].target.animate(keyframes, 1000);

            //一度表示されたら止める
            obs.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(show);

//監視対象
const images = document.querySelectorAll('.img');
images.forEach(img =>{
    observer.observe(img);
});



const textShow = (entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textAnimation = entry.target;
            const textKeyFrames = {
                opacity: [0, 1],
                translate: ['0 30px', 0]
            };
            const textOptions = {
                duration: 2000,
                // easing: 'ease',
                fill: 'forwards',
            };
            textAnimation.animate(textKeyFrames, textOptions);
            // obs.unobserve(entry.target); 
        }
    });
};

const textObserver = new IntersectionObserver(textShow);
textObserver.observe(document.querySelector('.textAnimation'));


