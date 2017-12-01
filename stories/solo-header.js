import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

const stories = storiesOf('Soloheader', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<Soloheader />`
}))
