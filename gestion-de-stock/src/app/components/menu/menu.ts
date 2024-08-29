
// cet interface sera utilisé dans tout le menu
export interface Menu{
    id?: String,
    titre?: String,
    icon?: String,
    url?: String,
    active?: Boolean,
    sousMenu?:Array<Menu>
}
// ? est utliser pour les rendre non obligatoire