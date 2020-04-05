export class Doctor {

    private doctorId: string;
    private doctorName: string;
    private doctorImage: File;
    private hospital: string;
    private email: string;
    private busy: boolean;

    public get getDoctorId(): string {
        return this.doctorId;
    }
    public set setDoctorId(id: string) {
        this.doctorId = id;
    }
    public get getDoctorName(): string {
        return this.doctorName;
    }
    public set setDoctorName(name: string) {
        this.doctorName = name;
    }
    public get getDoctorImage(): File {
        return this.doctorImage;
    }
    public set setDoctorImage(image: File) {
        this.doctorImage = image;
    }
    public get getHospital(): string {
        return this.hospital;
    }
    public set setHospital(hospital: string) {
        this.hospital = hospital;
    }
    public get getEmail(): string {
        return this.email;
    }
    public isBusy(): boolean {
        return this.busy;
    }
    public set setBusy(status: boolean) {
        this.busy = status;
    }
}
