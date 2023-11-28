import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  test('renders a form', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.find('form').exists()).toBe(true)
  })
  test('renders two input boxes', () => {
    const wrapper = mount(LoginForm)
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(2)
  })
  test('renders a button', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
})
