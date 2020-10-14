// Модальное окно
setTimeout(() => {
    let page = document.querySelector('.page');
    let popup = document.querySelector('.popup');
    let closeModalWindow = document.querySelector('#close');
    let openModalWindow = document.querySelectorAll(".catalog__name");

    openModalWindow.forEach(el => {
        el.addEventListener("click", function (event) {
            event.preventDefault();
            page.classList.toggle('blur');
            popup.classList.toggle("state-appear");
        });   
    });

    closeModalWindow.addEventListener('click', evt => {
        page.classList.remove("blur");
        popup.classList.remove("state-appear");
    });
}, 300);

// Галлерея
    let sliderCount = 0;

    /* Слайдер вперед */
    document.querySelector('#next').addEventListener('click', evt => {
        getMainImgIndex();
        gallery.main.setAttribute('src', gallery.items[sliderCount + 1]);
        if (sliderCount >= gallery.items.length - 1) {
            gallery.main.setAttribute('src', gallery.items[0]);
        } 
    });

    /* Слайдер назад */
    document.querySelector('#prev').addEventListener('click', evt => {
        getMainImgIndex();
        gallery.main.setAttribute('src', gallery.items[sliderCount - 1]);
        if (sliderCount == 0) {
            gallery.main.setAttribute('src', gallery.items[gallery.items.length - 1]);
        } 
    });

    function getMainImgIndex() {
        gallery.items.forEach((el, index) => {
            if(gallery.main.src == el) {
                return sliderCount = index;
            }
        });
    }

    

    let gallery = {
        main: null,
        carousel: null,
        items: [],
        baseUrl: 'https://raw.githubusercontent.com/Eliseev88/geekbrains/master/pr_omega/src/layout/catalog.json',
        
        init () {
            this.main = document.querySelector('#main-pic');
            this.carousel = document.querySelector('#carousel');
            this.getImages();
            setTimeout(() => {
                this.render();
                this.handleActions();
            }, 200);
        },

        getImages() {
            fetch(this.baseUrl)
            .then(d => d.json())
            .then(items => {
                this.items = items.map(el => el.productImg);    
            });
        },
        handleActions() {
            let currentUrlImg = this.main.src;
            this.carousel.addEventListener('click', evt => {
                if(evt.target.name == 'preview') {
                    this.changeMainImg(evt.target.src);
                    return currentUrlImg = evt.target.src;
                }
            });
            this.carousel.addEventListener("mouseover", evt => {
                if(evt.target.name == 'preview') {
                    this.changeMainImg(evt.target.src);
                } 
            });
            /* Если нужен возврат картники после отвода мыши */
            // this.carousel.addEventListener('mouseout', evt => {
            //     if(evt.target.name == 'preview') {
            //         this.changeMainImg(currentUrlImg);
            //     } else {
            //         return;
            //     }
            // });
        },
        changeMainImg(url) {
            this.main.src = url;
        },
        render() {
            this.main.src = this.items[0];
            let str = '';
            this.items.forEach(imgUrl => {
                str += `<img src="${imgUrl}" class="popup__preview" name="preview">`
            })
            this.carousel.innerHTML = str;
        }
    }
gallery.init();


