<template>
  <dx-scheduler
    :data-source="dataSource"
    :current-date="currentDate"
    :views="views"
    :height="600"
    :start-day-hour="9"
    current-view="day"
  />
</template>
<script>

import DxScheduler from 'devextreme-vue/scheduler';

import { data } from './data.js';

export default {
  components: {
    DxScheduler
  },
  data() {
    return {
      views: ['day', 'week', 'workWeek', 'month'],
      currentDate: new Date(2017, 4, 25),
      dataSource: data
    };
  }
};
</script>
