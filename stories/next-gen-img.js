import { storiesOf } from '@storybook/vue'

const stories = storiesOf('nextGenImg', module)

stories.addCodeExampleStory('Default', () => ({
  template: `<div style="width: 370px">
    <nextGenImg src="//images.ctfassets.net/6iactef8ko6c/51BTxQjQM84MaMGEk4cY4k/18956cef0802562b46a72ee665dadabb/sf_cam1_402x.jpg" />
    </div>`,
}))