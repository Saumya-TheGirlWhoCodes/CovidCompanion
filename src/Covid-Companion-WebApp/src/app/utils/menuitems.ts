export  class MenuItems {
    private static readonly MENU: Array<string> = ['Patient', 'Location', 'Doctors', 'FAQ'];
    public static getMenu(): Array<string> {
        return this.MENU;
    }
}