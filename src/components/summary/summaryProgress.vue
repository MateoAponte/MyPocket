<template>
    <div class="container-item__row flex-center">
        <div class="container-item__column">
            <div v-for="(array, index) in splitArray(true)" :key="index" class="container-item__row minify-padding">
                <summary-cards container="progress" :data="array" :expense="totalExpenses" @upload="showSummaryCategory($event)"/>
            </div>
        </div>
        <div class="container-item__column">
            <div v-for="(array, index) in splitArray(false)" :key="index" class="container-item__row minify-padding">
                <summary-cards container="progress" :data="array" :expense="totalExpenses" @upload="showSummaryCategory($event)" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import summaryCards from './summaryCard';

export default {
    name: "summaryProgress",
    components: {
        summaryCards
    },
    data: function() {
        return{
            totalExpenses: 0
        }
    },
    computed: {
        ...mapState('summary', {
            'selectedArray': (state) => state.selectedArray,
            'dropDownToggle': (state) => state.dropDownToggle
        }),
        ...mapState('common', {
            "itemsData": (state) => (state.itemsData)
        }),
        getNewTotalExpenses(){
            this.getSummaryData.forEach(x => {
                this.totalExpenses += x.cost;
            })
        },
        getSummaryData(){
            let summaryData = _.cloneDeep(this.itemsData);
            let result = summaryData.reduce((acc, val) => {
                let o = acc.filter((obj) => {
                        return obj.iconData.category == val.iconData.category;
                    }).pop() || {...val, cost:0};
                    
                    o.cost += parseInt(val.cost);
                    acc.push(o);
                    return acc;
                },[]);

                let finalresult = result.filter((itm, i, a) => {
                    return i == a.indexOf(itm);
                });

                finalresult.map(x => {
                    x.categoryData = summaryData.filter(y => {
                        return  x.iconData.category == y.iconData.category;
                    })
                })
            return finalresult;
        }
    },
    methods: {
        ...mapActions('summary', [
            "uploadDropDownToggle",
            "uploadSelectedArray"
        ]),
        splitArray(val) {
            return val ? this.getSummaryData.slice(0, (this.getSummaryData.length / 2)) 
                    : this.getSummaryData.slice( (this.getSummaryData.length / 2), this.getSummaryData.length)
        },
        showSummaryCategory(array) {
            this.uploadSelectedArray(array);
            setTimeout(() => {
                this.uploadDropDownToggle(true);
            }, 10)
        }
    },
    mounted(){
        this.getNewTotalExpenses;
    }
}
</script>