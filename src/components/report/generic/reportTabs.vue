<template>
    <div class="container-item__row report__tabs">
        <div class="container-item__column" v-for="(itemNav, index) in navItemsArr" :key="index"
            @click="iterateYear(getTranslateItemsNav(itemNav, 'step'), itemNav, $event, index)"
            :childNode="index"
        >
            {{getTranslateItemsNav(itemNav, "date")}}
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "reportTabs",
    computed: {
        ...mapState('generic', {
            "navItemsArr": (state) => (state.navItemsArr),
            "mainDateCategories": (state) => (state.mainDateCategories),
        })
    },
    methods: {
        ...mapActions('generic',[
            'updateCategoriesData',
            'updateNavItemsArr',
            'updateSelectedData'
        ]),
        firtsItemTab(){
            let tabs = document.querySelectorAll(".generic-report-container > .m-container-row .m-card .m-card-header .container-item__row  .container-item__column");
            this.updateSelectedData(...Object.values(this.navItemsArr[0]));
            tabs[0].classList.add("active-link");
        },
        getTranslateItemsNav(fragmentDate, type) {
            let keys = Object.keys(fragmentDate)[0];
            let date = this.moment(keys).format('ll');
            let split = keys.split("/");
            return type == "date" ? date.replace(/(\s[0-9]\,)+/, "") : split[1];
        },
        getTraduceData(index, item) {
            this.updateCategoriesData( [] );
            let arr = [];
            
            if(!item){
                arr = _.cloneDeep(this.navItemsArr).filter(x => {
                    let key = [];
                    key = Object.keys(x)[0].split("/");
                    return Object.keys(x)[0] === `${key[0]}/${new Date().getMonth()}`;
                });
                arr = arr[0][`${new Date().getFullYear()}/${new Date().getMonth()}`];
            } else {
                arr = _.cloneDeep(this.navItemsArr).filter(x => {
                    let key = [];
                    key = Object.keys(x)[0].split("/");
                    return Object.keys(x)[0] === `${key[0]}/${index}`;
                });
                arr = arr[0][Object.keys(item)[0]];
            }
            var result = arr.reduce(function (acc, val) {
                var o = acc.filter(function (obj) {
                    return obj.iconData.category == val.iconData.category;
                }).pop() || {
                    ...val,
                    cost: 0
                };

                o.cost += parseInt(val.cost);
                acc.push(o);
                return acc;
            }, []);

            var finalresult = result.filter(function (itm, i, a) {
                return i == a.indexOf(itm);
            });
            finalresult.map(x => {
                x.categoryData = arr.filter(y => {
                    return x.iconData.category == y.iconData.category;
                })
            })
            finalresult.forEach(obj => {
                this.updateCategoriesData({
                    category: obj.iconData.category,
                    cost: obj.cost,
                    date: obj.date
                });
            });
        },
        verifyArrDate(arr, date) {
            if (!arr.find(x => Object.keys(x)[0] == date)) {
                return arr
            }
        },
        getNavItemsArr(mainArr, year, month) {
            let hollowArr = [];
            mainArr.forEach(x => {
                if (x[`${year}/${month - 1}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month - 1}`).push({
                        [`${year}/${month - 1}`]: x[`${year}/${month - 1}`]
                    });
                } else if (x[`${year}/${month}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month}`).push({
                        [`${year}/${month}`]: x[`${year}/${month}`]
                    });
                } else if (x[`${year}/${month + 1}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month + 1}`).push({
                        [`${year}/${month + 1}`]: x[`${year}/${month + 1}`]
                    });
                }
            });
            return hollowArr;
        },
        transformData(arr) {
            let dataSplit = (val) => val.split('/');
            let arrSort = _.cloneDeep(arr);
            arrSort.sort(function (a, b) {
                let num1 = dataSplit(Object.keys(a)[0])[0] + dataSplit(Object.keys(a)[0])[1];
                let num2 = dataSplit(Object.keys(b)[0])[0] + dataSplit(Object.keys(b)[0])[1];

                if (num1 < num2) return -1;
                if (num2 < num1) return 1;
                return 0;
            });
            return arrSort;
        },
        getYear(i) {
            let year = new Date().getFullYear();
            let keysDate = [];
            this.mainDateCategories.forEach(x => {
                keysDate.push(...Object.keys(x))
            });
            
            let date = keysDate.filter(x => x == `${year}/${i}`);
            date = date.join('').split('/');
            this.updateNavItemsArr(this.getNavItemsArr(this.mainDateCategories, parseInt(date[0]), parseInt(date[1])));
            this.updateNavItemsArr(this.transformData(this.navItemsArr));
        },
        iterateYear(index, arr, evt, step) {
            if(evt){
                this.eventData = evt.target;
            }
            this.getYear(index);
            this.getTraduceData(index, arr);
        },
        tabsFuncionality(){
            let _self = this;
    
            let reportTabs = document.querySelector(".report__tabs");
            if(window.addEventListener) {
            // Normal browsers
                reportTabs.addEventListener('DOMSubtreeModified', contentChanged, false);
            } else
            if(window.attachEvent) {
                // IE
                reportTabs.attachEvent('DOMSubtreeModified', contentChanged);
            }
    
            function contentChanged() {
                let children = reportTabs.childNodes;
                children.forEach( (x,i) => {
                    x.classList.remove("active-link");
                    if(children.length >= 3 && i == 1){
                        x.classList.add("active-link");
                        _self.updateSelectedData(...Object.values(_self.navItemsArr[i]));
                    } else {
                        if(x.innerHTML === _self.eventData.innerHTML && children.length == 2){
                            x.classList.add("active-link");
                            _self.updateSelectedData(...Object.values(_self.navItemsArr[i]));
                        }
                    }
                });
            }
        }
    },
    beforeMount(){
        let date = new Date();
        let month = date.getMonth();

        this.getYear(month);
    },
    mounted(){
        this.firtsItemTab();
        this.tabsFuncionality();
    }
}
</script>