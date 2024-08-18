import { mount } from '@vue/test-utils'
import Message from "@/components/Message.vue"

// Mount: Tạo 1 wrapper (trình bao bọc, gói, bao bọc) chứa thành phần vue được gắn vào và hiển thị
describe("Message.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Message,  {
            props: {
                msg: "a message"
            },
        });

        expect(wrapper.text()).toContain("a message");
    });
})