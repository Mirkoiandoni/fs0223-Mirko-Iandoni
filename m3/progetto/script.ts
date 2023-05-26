interface ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number = 0.2;

  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
}

class Smartphone implements ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;

  constructor(carica: number, numeroChiamate: number, costoMinuto: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
    this.costoMinuto = costoMinuto;
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
