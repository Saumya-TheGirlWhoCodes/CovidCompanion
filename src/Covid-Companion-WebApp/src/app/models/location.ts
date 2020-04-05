export class Location {
    private latitude: number;
    private longitude: number;
    constructor(latitude: number, longitude: number) {
        this.setLatitude = latitude;
        this.setLongitude = longitude;
    }
    public get getLatitude() {
        return this.latitude;
    }
    public set setLatitude(l: number) {
        if (l >= 0 && l <= 90) {
            this.latitude = l;
        } else {
            this.latitude = null;
        }
    }

    public get getLongitude() {
        return this.longitude;
    }
    public set setLongitude(l: number) {
        if (l >= 0 && l <= 180) {
            this.longitude = l;
        } else {
            this.longitude = null;
        }
    }
}
