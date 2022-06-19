import { get, makeAutoObservable } from "mobx"

export default class ClothingStore{
    constructor() {
        this._types = []
        this._brands = []
        this._baskets = []
        this._clothings = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
      makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }

    setBaskets(basket){
        this._baskets = basket
    }

    setBrands(brands) {
        this._brands = brands
    }
    setClothings(clothings) {
        this._clothings = clothings
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get clothings() {
        return this._clothings
    }
    get basket() {
        return this._baskets
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}