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
  test('shows error when invalid email is entered', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="email"]')

    await input.setValue('invalid email')

    await input.trigger('input')

    const errorMessage = wrapper.find('.error-message')
    expect(errorMessage.exists()).toBe(true)
  })
})
