import { mount } from "@vue/test-utils"
import NavBar from "@/components/Nav.vue"

describe("Nav.vue", () => {
    it("render a nav login", () => {
        const wrapper = mount(NavBar, {
            data() {
                return {
                    isLogin: true
                }
            }
        })

        const loginLink = wrapper.get("#loged")
        expect(loginLink.text()).toEqual("About")
    })

    // Cần passcase khi wrapper.get("#loged") không tồn tại do chưa login

    it("render a nav not login", () => {
        const wrapper = mount(NavBar, {
            data() {
                return {
                    isLogin: false
                }
            }
        })

        const loginLink = wrapper.find("#loged")
        
        expect(loginLink.exists()).toBe(false)
    })
})