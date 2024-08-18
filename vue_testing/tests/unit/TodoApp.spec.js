import { mount } from "@vue/test-utils"
import TodoApp from "@/components/TodoApp.vue"

describe('TodoApp', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(TodoApp)
    })

    it("render todo app", () => {
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe("Vue testing")
    })

    it("add new todo", async () => {
        await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
        await wrapper.get('[data-test="form"]').trigger("submit")
        
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3)
    })
    
    it("completed todo", async () => {
        await wrapper.get('[data-test="todo-checkbox"]').setValue(true);
        
        expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed")
    })
})