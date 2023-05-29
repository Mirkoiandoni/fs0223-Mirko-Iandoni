var Call = /** @class */ (function () {
    function Call(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return Call;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate) {
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    Smartphone.prototype.getRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (d, h) {
        var filtro = [];
        this.registroChiamate.forEach(function (c) {
            if (d == c.dataOra.getDate() && h == c.dataOra.getHours()) {
                filtro.push(c);
            }
        });
        if (filtro.length == 0) {
            console.log("non ci sono risultati");
        }
        else {
            console.log(filtro);
        }
    };
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("la ricarica  è stata effetuata ");
    };
    Smartphone.prototype.numero404 = function () {
        return "credito residuo" + this.carica;
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = this.costoMinuto * min;
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var now = new Date();
            this.registroChiamate.push(new Call(this.numeroChiamate, min, now));
            console.log("chiamata effetuata");
        }
        else if (costoChiamata == this.carica) {
            this.carica -= costoChiamata;
            console.log("chiamata effettuata,ma credito esaurito");
        }
        else {
            console.log("il credito risiduo non è sufficente per effetuare la chiamata");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
var Samsung = new Smartphone(100, 0);
Samsung.ricarica(10);
Samsung.chiamata(15);
console.log("filtra");
Samsung.filtraChiamatePerDataOra(26, 15);
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate;
Samsung.azzeraChiamate();
console.log(Samsung.getNumeroChiamate());
console.log(Samsung.numero404());
var Motorola = new Smartphone(100, 0);
Motorola.ricarica(60);
Motorola.chiamata(15);
console.log(Motorola.getNumeroChiamate());
console.log(Motorola.numero404());
var Honor = new Smartphone(100, 0);
Honor.ricarica(60);
Honor.chiamata(15);
console.log(Honor.getNumeroChiamate());
console.log(Honor.numero404());
var Xiaomi = new Smartphone(100, 0);
Xiaomi.ricarica(60);
Xiaomi.chiamata(15);
console.log(Xiaomi.getNumeroChiamate());
console.log(Xiaomi.numero404());
