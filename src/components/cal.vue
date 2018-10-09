<template>
  <div>
    <asd></asd>
  <div id="cal" style="margin-left: 260px; margin-top: 10px" >
    <calendar
      :first-day="1"
      :all-events="events"
      :canAddEvent="true"
      :canDeleteEvent="true"
      :dateLocale="'ar'"
      :displayWeekNumber="false"
      @eventAdded="eventAdded"
      @eventDeleted="eventDeleted"
    ></calendar>
  </div>
  </div>
</template>

<script>
  import calendar from '../Calendar.vue';
  import asd from './asd.vue'
  export default {
    name: 'cal',
    data() {
      return {
        events: []
      }
    },
    components: {
      calendar,asd
    },
    methods: {
      eventAdded(event) {
        this.events.push(event);
      },
      eventDeleted(event) {
        this.events.splice(this.events.indexOf(event), 1);
      },
    },
    mounted() {
      let me = this;
      setTimeout(function () {
        me.events = [ // you can make ajax call here
          {
            id:1,
            title:'Event 1',
            color: 'card-default',
            description: 'Some fancy details for the event',
            date: new Date()
          },
          {
            id:2,
            title:'Event blaa on same day!',
            color: 'card-default',
            description: 'Please bring some donouts',
            date: new Date()
          },
          {
            id:3,
            title:'Event 2',
            color: 'card-default',
            description: 'Don\'t forget about this!',
            date: new Date(new Date().setHours(new Date().getHours() + 2*24)) // add 2 days
          },
          {
            id:4,
            title:'Event 3',
            color: 'card-default',
            description: 'Feel free to bring anyone with you',
            date: new Date(new Date().setHours(new Date().getHours() + 5*24)) // add 5 days
          },
          {
            id:5,
            title:'Event 4',
            color: 'card-default',
            description: 'Laptop required',
            date: new Date(new Date().setHours(new Date().getHours() + 14*24)) // add 2 weeks
          },
          {
            id:6,
            title:'Event 5',
            color: 'card-default',
            date: new Date(new Date().setHours(new Date().getHours() + 30*24)) // add 1 month
          },
        ];
      }, 1000);
    }
  }
</script>
