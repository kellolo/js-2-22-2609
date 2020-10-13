class Validator {
    constructor () {
        this.template = {
            "name": /[a-zа-яё](\b|\s)/i,
            "phone": /(\+\d\(\d{3}\)\d{3}\-\d{4})(\b|\s)/i,
            "email": /[a-z0-9_\.-]+@[a-z0-9]+\.([a-z\.]{2,3})(\s|\b)/i,
        }


        this._init();
    }
    _init() {
        document.querySelectorAll('input').forEach(element => {
            element.addEventListener('change', this._validate.bind(this));
        });
    }

    _validate (evt) {
        let checker = this.template[evt.target.id];
        var element = document.getElementById(evt.target.id);
        if (checker.test(evt.target.value) === false) {
            element.classList.add("invalid");
        } else {
            element.classList.remove("invalid");
        }
    }

}

let  validation = new Validator;
