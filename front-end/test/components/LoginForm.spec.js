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
  test('shows error when invalid password is entered', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="password"]')

    await input.setValue('12345')
    const button = wrapper.find('button')

    await button.trigger('click')
    // waits for the next Vue event loop cycle to allow calls to the database
    await wrapper.vm.$nextTick()

    const errorMessage = wrapper.find('.error-message')
    expect(errorMessage.exists()).toBe(true)
  })
  test('submits correct data when valid email+password are entered', async () => {
    const wrapper = mount(LoginForm)

    // mock of loginSubmit method
    wrapper.vm.loginSubmit = jest.fn()

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')
    const button = wrapper.find('button')

    await emailInput.setValue('correct.email@test.com')
    await passwordInput.setValue('correctPassword')
    await button.trigger('click')

    expect(wrapper.vm.loginSubmit).toHaveBeenCalledWith({
      email: 'correct.email@test.com',
      password: 'correctPassword'
    })
  })
  test('error message disappears when user starts typing after validation error', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[(type = "email"]')

    await input.setValue('invalid email')
    await input.trigger('input')

    let errorMessage = wrapper.find('.error-message')
    expect(errorMessage.exists()).toBe(true)

    await input.trigger('input')

    errorMessage = wrapper.find('.error-message')
    expect(errorMessage.exists()).toBe(false)
  })
})
