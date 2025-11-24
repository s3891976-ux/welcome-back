const zoomBox = document.getElementById("zoomBox");
const zoomBottomBox = document.getElementById("zoomBottomBox");
const fontImage = zoomBox.querySelector(".font-image");
const backImage = document.querySelector(".back-image");
let backImageShown = false;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    
    const start = zoomBottomBox.offsetTop - window.innerHeight -300; 
    const end = start + window.innerHeight; 
    let progress = (scrollTop - start) / (end - start);
    progress = Math.max(0, Math.min(1, progress));
    

    
    const scaleValue = 1 + progress * 4;
    

   
    const opacityValue = 1 - progress ;

    
    if (fontImage) {
        fontImage.style.transformOrigin = "center top";
        fontImage.style.transform = `scale(${scaleValue})`;
        fontImage.style.opacity = opacityValue;
    }
    if (backImage) {
    
      backImage.style.opacity = progress === 1 ? 1 : 0;
      
     
      if (progress === 1 && !backImageShown) {
        const dataSrc = backImage.getAttribute('data-src');
        if (dataSrc) {
          
          backImage.src = dataSrc + '?t=' + new Date().getTime();
        }
        backImageShown = true;
      }
      if (progress < 1) {
        if (backImageShown) {
          
          backImage.removeAttribute('src');
          backImageShown = false;
        }
      }
    }
});

const gif1 = document.getElementById('test');
const overlayContainer = document.getElementById('overlay-container');
let hideTimeout;

gif1.addEventListener('click', () => {
        
    overlayContainer.classList.remove('overlay-hidden');
    overlayContainer.classList.add('overlay-visible');

       
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        }

        
    hideTimeout = setTimeout(() => {
        overlayContainer.classList.remove('overlay-visible');
        overlayContainer.classList.add('overlay-hidden');
    }, 5000);
    });



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hallway-btn').forEach(btn => {
        const box = btn.closest('.box');
        if (!box) return;
        const helloImg = box.querySelector('.hello');
        if (!helloImg) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            helloImg.classList.toggle('visible');
        
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bagBox = document.querySelector('.bag-box');
    const picnic2 = document.querySelector('.picnic2');
    const bag = document.querySelector('.bag');

    if (!bagBox) return;

   
    if (bag) bag.style.display = 'none';

    bagBox.style.cursor = 'pointer';
    bagBox.addEventListener('click', () => {
        if (!picnic2 || !bag) return;

        
        const picnicHidden = window.getComputedStyle(picnic2).display === 'none';

        if (picnicHidden) {
            picnic2.style.display = '';
            bag.style.display = 'none';
        } else {
            picnic2.style.display = 'none';
            bag.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const eyeButton = document.querySelector('.eye-button');
    const whiteImg = document.querySelector('.eyes .white-eye');
    const eyes1 = document.querySelector('.eyes1');
    const eyes2 = document.querySelector('.eyes2');
    const eyes3 = document.querySelector('.eyes3');
    const eyes4 = document.querySelector('.eyes4');
    const eyes5 = document.querySelector('.eyes5');
    const eyes6 = document.querySelector('.eyes6');

    if (!eyeButton) return;

    let isOpen = false;

    eyeButton.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            
            if (whiteImg) whiteImg.style.opacity = '0';
            if (eyes1) eyes1.style.transform = 'translate(-20%, 15%)';
            if (eyes2) eyes2.style.transform = 'translate(20%, -30%)';
            if (eyes3) eyes3.style.transform = 'translate(-8%, -30%)';
            if (eyes4) eyes4.style.transform = 'translate(20%, 50%)';
            if (eyes5) eyes5.style.transform = 'translate(0%, 10%)';
            if (eyes6) eyes6.style.transform = 'translate(-20%, -15%)';
        } else {
           
            if (whiteImg) whiteImg.style.opacity = '1';
            if (eyes1) eyes1.style.transform = 'translate(0, 0)';
            if (eyes2) eyes2.style.transform = 'translate(0, 0)';
            if (eyes3) eyes3.style.transform = 'translate(0, 0)';
            if (eyes4) eyes4.style.transform = 'translate(0, 0)';
            if (eyes5) eyes5.style.transform = 'translate(0, 0)';
            if (eyes6) eyes6.style.transform = 'translate(0, 0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const leftDiv = document.querySelector('.left');
    
    if (leftDiv) {
        const audio = new Audio('./audio/bird-chipping-426107.mp3'); 
        leftDiv.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play();
        });
        
     
        leftDiv.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const leftDiv = document.querySelector('.right');
    
    if (leftDiv) {
        
        const audio = new Audio('./audio/neighborhood-bird-ambiance-8-76686.mp3'); 
        leftDiv.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play();
        });
        
       
        leftDiv.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const leftDiv = document.querySelector('.center');
    
    if (leftDiv) {
        const audio = new Audio('./audio/talking-46836.mp3'); 
        leftDiv.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play();
        });
        
        
        leftDiv.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tree1 = document.querySelector('.tree1');
    
    if (tree1) {
        let clickCount = 0;
        const positions = [
            { left: '5%', top: '10%' }, 
            { left: '70%', top: '15%' },  
            { left: '40%', top: '10%' },  
            { left: '20%', top: '40%' } 
        ];
        
      
        tree1.style.cursor = 'pointer';
        tree1.style.pointerEvents = 'auto';
        
        tree1.addEventListener('click', () => {
            clickCount = (clickCount + 1) % 4;
            
            tree1.style.left = positions[clickCount].left;
            tree1.style.top = positions[clickCount].top;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tvBox = document.querySelector('.tv-box');
    const tv = document.querySelector('.tv');
    const tv2 = document.querySelector('.tv2');
    const tv3 = document.querySelector('.tv3');
    const tv4 = document.querySelector('.tv4');
    
    if (tvBox && tv && tv2 && tv3 && tv4) {
        let currentTv = 0; 
        const tvs = [tv, tv2, tv3, tv4];
        
     
        tv2.style.display = 'none';
        tv3.style.display = 'none';
        tv4.style.display = 'none';
        
        tvBox.style.pointerEvents = 'auto';
        
        tvBox.addEventListener('click', () => {
            
            tvs[currentTv].style.display = 'none';
            
            
            currentTv = (currentTv + 1) % 4; 
            
           
            tvs[currentTv].style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const endBox = document.querySelector('.end-box');
    const box1 = document.querySelector('.box1');
    let hasScrolledToEnd = false;
    const error1 = document.querySelector('.error1');
    const error2 = document.querySelector('.error2');
    const error3 = document.querySelector('.error3');
    const error4 = document.querySelector('.error4');

    if (!endBox || !error1 || !error2 || !error3 || !error4) return;

    
    error1.style.opacity = '0';
    error2.style.opacity = '0';
    error3.style.opacity = '0';
    error4.style.opacity = '0';

    let hasTriggered = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasTriggered) {
                hasTriggered = true;

               
                error1.style.opacity = '1';

               
                setTimeout(() => {
                    error2.style.opacity = '1';
                }, 800);

                
                setTimeout(() => {
                    error3.style.opacity = '1';
                }, 1500);

                
                setTimeout(() => {
                    error4.style.opacity = '1';
                }, 900);
            }
        });
    }, {
        threshold: 0.5 
    });
observer.observe(endBox);

    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const endBoxBottom = endBox.offsetTop + endBox.offsetHeight;
        const windowBottom = scrollTop + window.innerHeight;

        if (windowBottom >= endBoxBottom - 50 && !hasScrolledToEnd) {
            hasScrolledToEnd = true;

           
            setTimeout(() => {
                
                const fadeOverlay = document.createElement('div');
                fadeOverlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    opacity: 0;
                    transition: opacity 1s ease;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(fadeOverlay);

                
                setTimeout(() => {
                    fadeOverlay.style.opacity = '1';
                }, 10);

               
                setTimeout(() => {
                    const box1Top = box1.offsetTop;
                    window.scrollTo({
                        top: box1Top,
                        behavior: 'instant'
                    });

                    
                    setTimeout(() => {
                        fadeOverlay.style.opacity = '0';

                       
                        setTimeout(() => {
                            fadeOverlay.remove();
                            hasScrolledToEnd = false; 
                            hasTriggered = false; 
                        }, 1000);
                    }, 100);
                }, 1000);
            }, 1000); // 
        }
    });
});
    
document.addEventListener('DOMContentLoaded', () => {
    const playBox = document.querySelector('.play-box');
    const playImg = document.querySelector('.play');
    const recImg = document.querySelector('.rec');
    
    if (playBox && playImg && recImg) {
        // Tạo audio element
        const audio = new Audio('./audio/numbthefeelings - liminal (freetouse.com).mp3'); // Thay đường dẫn file nhạc
        audio.loop = true; // Loop nhạc
        
        let isPlaying = false;
        
        // Ẩn rec ban đầu
        recImg.style.display = 'none';
        playImg.style.display = 'block';
        
        playBox.style.cursor = 'pointer';
        
        playBox.addEventListener('click', () => {
            if (!isPlaying) {
                // Bắt đầu phát nhạc
                audio.play().catch(err => {
                    console.error('Audio play failed:', err);
                });
                
                // Đổi sang rec
                playImg.style.display = 'none';
                recImg.style.display = 'block';
                
                isPlaying = true;
            } else {
                // Dừng nhạc
                audio.pause();
                audio.currentTime = 0; // Reset về đầu
                
                // Đổi lại play
                recImg.style.display = 'none';
                playImg.style.display = 'block';
                
                isPlaying = false;
            }
        });
    }
});