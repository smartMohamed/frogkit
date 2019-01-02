import { mount } from 'vue-test-utils'
import nextGenImg from '@/components/next-gen-img'

describe('Logistic Badges component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(nextGenImg, {propsData: {src: "http://images.ctfassets.net/6iactef8ko6c/51BTxQjQM84MaMGEk4cY4k/18956cef0802562b46a72ee665dadabb/sf_cam1_402x.jpg", alt: 'smartfrog cam'}})
    expect(wrapper.html()).toMatchSnapshot()
  })

})
