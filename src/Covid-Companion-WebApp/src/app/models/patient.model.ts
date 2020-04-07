import { CovidSymptoms } from './covid-symptoms';
import { Location } from './location';

export class Patient  {
 private patientId: number;
 private patientName: string;
 private patientImage: File;
 private age: number;
 private contactNumber: string;
 private admittedDate: Date;
 private dischargeDate: Date;
 private hospital: string;
 private severity: string;
 private homeAddress: Location;
 private currentLocation: Location;
 private symptoms: CovidSymptoms;
 private comborbid: boolean;
 private diseases: Array<string>;
 private frequencyCheckins: number;

 public get getPatientId(): number {
   return this.patientId;
 }
 public set setPatientId(id: number) {
   this.patientId = id;
 }
 public get getPatientName(): string {
   return this.patientName;
 }
 public set setPatientName(name: string) {
   this.patientName = name;
 }
 public get getPatientImage(): File {
    return this.patientImage;
 }
 public set setPatientImage(image: File) {
    this.patientImage = image;
 }
 public get getAge(): number {
    return this.age;
 }
 public set setAge(a: number) {
    this.age = a;
 }
 public get getContactNumber() {
   return this.contactNumber;
 }
 public get getAdmittedDate(): Date {
   return this.admittedDate;
 }
 public set setAdmittedDate(admittedDate: Date) {
   this.admittedDate = admittedDate;
 }
 public get getDischargedDate() {
   return this.dischargeDate;
 }
 public set setDischargedDate(dischargedDate: Date) {
    this.dischargeDate = dischargedDate;
 }
 public get getHospital(): string {
    return this.hospital;
 }
 public set setHospital(hospital: string) {
   this.hospital = hospital;
 }
 public get getSeverity(): string {
    return this.severity;
 }
 public set setSeverity(severity: string) {
    this.severity = severity;
 }
 public get getHomeAddress(): Location {
   return this.homeAddress;
 }
 public set setHomeAddress(home: Location) {
    this.homeAddress = home;
 }
 public get getCurrentLocation(): Location {
    return this.currentLocation;
 }
 public set setCurrentLocation(location: Location) {
    this.currentLocation = location;
 }
 public get getFrequencyCheckins(): number {
    return this.frequencyCheckins;
 }
 public set setFrequencyCheckins(checkins: number) {
    this.frequencyCheckins = checkins;
 }
 public get hasComorbid(): boolean {
    return this.comborbid;
 }
 public set setComorbid(comorbid: boolean) {
    this.comborbid = comorbid;
 }
 public get getDiseases(): Array<string> {
    return this.diseases;
 }
 public addDiseases(disease: string): void {
    if (this.hasComorbid) {
     this.diseases.push(disease);
  }
 }
 public get getSymptoms(): CovidSymptoms {
    return this.symptoms;
 }
 public set setSymptoms(symptoms: CovidSymptoms) {
    this.symptoms = symptoms;
 }
}
