interface ISmartphone {
  carica: number;
  numeroChiamate: number;
  registroChiamate: Call[];

  getRegistroChiamate(): void;
  filtraChiamatePerDataOra(d: number, h: number): void;
  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
}

class Call {
  id: number;
  durata: number;
  dataOra: Date;

  constructor(id: number, durata: number, dataOra: Date) {
    this.id = id;
    this.durata = durata;
    this.dataOra = dataOra;
  }
}

class Smartphone implements ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number = 0.2;
  registroChiamate: Call[] = [];

  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }

  getRegistroChiamate(): void {
    console.log(this.registroChiamate);
  }
  filtraChiamatePerDataOra(d: number, h: number): void {
    let filtro: Call[] = [];
    this.registroChiamate.forEach((c: Call) => {
      if (d == c.dataOra.getDate() && h == c.dataOra.getHours()) {
        filtro.push(c);
      }
    });

    if (filtro.length == 0) {
      console.log("non ci sono risultati");
    } else {
      console.log(filtro);
    }
  }

  ricarica(euro: number): void {
    this.carica += euro;
    console.log("la ricarica  è stata effetuata ");
  }
  numero404(): string {
    return "credito residuo" + this.carica;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  chiamata(min: number): void {
    let costoChiamata = this.costoMinuto * min;
    if (costoChiamata < this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      let now: Date = new Date();
      this.registroChiamate.push(new Call(this.numeroChiamate, min, now));

      console.log("chiamata effetuata");
    } else if (costoChiamata == this.carica) {
      this.carica -= costoChiamata;
      console.log("chiamata effettuata,ma credito esaurito");
    } else {
      console.log(
        "il credito risiduo non è sufficente per effetuare la chiamata"
      );
    }
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}
const Samsung = new Smartphone(100, 0);
Samsung.ricarica(10);
Samsung.chiamata(15);
console.log("filtra");
Samsung.filtraChiamatePerDataOra(26, 15);
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate;
Samsung.azzeraChiamate();
console.log(Samsung.getNumeroChiamate());
console.log(Samsung.numero404());

const Motorola = new Smartphone(100, 0);
Motorola.ricarica(60);
Motorola.chiamata(15);
console.log(Motorola.getNumeroChiamate());
console.log(Motorola.numero404());

const Honor = new Smartphone(100, 0);
Honor.ricarica(60);
Honor.chiamata(15);
console.log(Honor.getNumeroChiamate());
console.log(Honor.numero404());

const Xiaomi = new Smartphone(100, 0);
Xiaomi.ricarica(60);
Xiaomi.chiamata(15);
console.log(Xiaomi.getNumeroChiamate());
console.log(Xiaomi.numero404());
