<template>
    <div class="week-row" @click="showWeekNumber">
        <div class="week-number" v-if="showWeekNumberFlag && $i18n">{{ $t('generic.week')}} {{week[0].date.format('w')}}</div>
        <div class="week-number" v-else-if="showWeekNumberFlag">Week {{week[0].date.format('w')}}</div>
        <Day v-for="day in week"
             :day="day"
             :key="day.date"
             :canAddEvent="canAddEvent"
             :canDeleteEvent="canDeleteEvent"
             @eventAdded="eventAdded"
             @eventDeleted="eventDeleted"
        ></Day>
    </div>
</template>
<script>
    import {WEEK_SELECTED, EVENT_ADDED, EVENT_DELETED} from '../actions';
    import Day from './Day.vue'
    export default {
        components: {
            Day
        },

        props:{
            week: {
                type: Array
            },

            displayWeekNumber: {
                type: Boolean,
                default: true,
            },

            canAddEvent: {
                type: Boolean,
            },

            canDeleteEvent: {
                type: Boolean,
            },
        },

        data () {
            return {
                showWeekNumberFlag: false,
            }
        },

        created(){
            let me = this;
            this.$root.$on(WEEK_SELECTED, function (payload) {
                if(payload.weekDate != me.week[0].date) {
                    me.showWeekNumberFlag = false;
                }
            });
        },

        methods : {
            showWeekNumber() {
                if(this.displayWeekNumber) {
                    this.showWeekNumberFlag = true;
                }
                this.$root.$emit(WEEK_SELECTED, {weekDate:this.week[0].date});
            },

            eventAdded(event) {
                this.$emit(EVENT_ADDED, event);
            },

            eventDeleted(event) {
                this.$emit(EVENT_DELETED, event);
            }
        }
    }
</script>
<style>
    .week-row {
        width: 100%;
        border-left: 1px solid #e0e0e0;
        display: flex;
        cursor: pointer;
    }
    .week-number {
        border: 1px solid #e1e1e1;
        border-right: 0px;
        border-radius: 5px 0 0 5px;
        background-color: #fafafa;
        text-align: right;
        position: absolute;
        width: 70px;
        left: -71px;
        padding: 8px 5px;
        cursor: pointer;
    }
</style>
