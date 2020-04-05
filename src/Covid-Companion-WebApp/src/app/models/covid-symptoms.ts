export class CovidSymptoms {
    private fever: boolean;
    private cough: boolean;
    private breatheShortness: boolean;
    private blueFaceOrLips: boolean;
    public get hasFever(): boolean {
        return this.fever;
    }
    public set setFever(f: boolean) {
        this.fever = f;
    }
    public get hasCough(): boolean {
        return this.cough;
    }
    public set setCough(c: boolean) {
        this.cough = c;
    }
    public get hasBreatheShortness(): boolean {
        return this.breatheShortness;
    }
    public set setBreatheShortness(b: boolean) {
        this.breatheShortness = b;
    }
    public get hasBlueFaceOrLips(): boolean {
        return this.blueFaceOrLips;
    }
    public set setBlueFaceOrLips(isBlue: boolean) {
        this.blueFaceOrLips =  isBlue;
    }

}
