import { action, observable, runInAction } from "mobx";

export default class RootStore {
    loading = false;

    constructor(){
        this.loading =false
    }
}
