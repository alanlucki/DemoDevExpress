<template>
  <div>
    <div class="settings">
      <div class="column">
        <div class="field">
          <div class="label">Title</div>
          <div class="value">
            <dx-text-box
              v-model="text"
              :max-length="40"
              value-change-event="keyup"
            />
          </div>
        </div>
        <div class="field">
          <div class="label">Color</div>
          <div class="value">
            <dx-color-box
              v-model="color"
              apply-value-mode="instantly"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">Width</div>
          <div class="value">
            <dx-number-box
              v-model="width"
              :show-spin-buttons="true"
              :max="700"
              :min="70"
              format="#0px"
            />
          </div>
        </div>
        <div class="field">
          <div class="label">Height</div>
          <div class="value">
            <dx-number-box
              v-model="height"
              :show-spin-buttons="true"
              :max="700"
              :min="70"
              format="#0px"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">Transform</div>
          <div class="value">
            <dx-select-box
              v-model="transform"
              :items="transformations"
              :grouped="true"
              display-expr="name"
              value-expr="value"
            />
          </div>
        </div>
        <div class="field">
          <div class="label">Border</div>
          <div class="value">
            <dx-switch v-model="border"/>
          </div>
        </div>
      </div>
    </div>
    <superhero-logo
      :color="color"
      :text="text"
      :width="width"
      :height="height"
      :transform="transform"
      :border="border"
    />
  </div>
</template>
<script>

import { DxTextBox, DxColorBox, DxNumberBox, DxSwitch, DxSelectBox } from 'devextreme-vue';

import SuperheroLogo from './SuperheroLogo.vue';

export default {
  components: {
    DxTextBox,
    DxColorBox,
    DxNumberBox,
    DxSwitch,
    DxSelectBox,
    SuperheroLogo
  },
  data: function() {
    return {
      color: '#f05b41',
      text: 'UI Superhero',
      width: 370,
      height: 260,
      transform: 'scaleX(1)',
      border: false,
      transformations: [
        {
          key: 'Flip',
          items: [
            { name: '0 degrees', value: 'scaleX(1)' },
            { name: '180 degrees', value: 'scaleX(-1)' }
          ]
        },
        {
          key: 'Rotate',
          items: [
            { name: '0 degrees', value: 'rotate(0)' },
            { name: '15 degrees', value: 'rotate(15deg)' },
            { name: '30 degrees', value: 'rotate(30deg)' },
            { name: '-15 degrees', value: 'rotate(-15deg)' },
            { name: '-30 degrees', value: 'rotate(-30deg)' }
          ]
        }
      ]
    };
  },
  watch: {
    height(val) {
      this.width = val * 37 / 26;
    },
    width(val) {
      this.height = val * 26 / 37;
    }
  }
};
</script>
<style>
.settings {
    text-align: center;
    background-color: rgba(191, 191, 191, 0.15);
}
.settings .column {
    width: 26%;
    display: inline-block;
    margin: 15px 3%;
    text-align: left;
}
.settings .column .field {
    padding: 5px 0;
}
.settings .column .field > div {
    display: inline-block;
    vertical-align: middle;
}
.settings .column .field .label {
    width: 75px;
}
.settings .column .field .value {
    width: 60%;
}
.dx-theme-generic .settings .column .field .value .dx-switch {
    height: 36px;
}

.dx-theme-material .settings .column .field .value .dx-switch {
    height: 32px;
}
.dx-theme-material .settings .column .field .label {
    padding-top: 2px;
}
</style>
