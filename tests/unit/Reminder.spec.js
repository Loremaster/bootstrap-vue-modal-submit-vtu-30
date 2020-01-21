import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue";
import flushPromises from "flush-promises";
import Component from "@/components/Reminder.vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(Vuex)

describe("Reminder.vue", () => {
  it("calls action on submit", async () => {
    const actions = { createReminder: jest.fn() }
    const store = new Vuex.Store({ actions })
    const wrapper = mount(Component, { localVue, store });

    wrapper.find({ ref: "modal" }).setProps({ static: true }); // To be able to show modal html
    await Vue.nextTick();

    wrapper.find("textarea").setValue("Reminder message");
    await Vue.nextTick();

    wrapper.find("button").trigger("click");
    await Vue.nextTick();
    await flushPromises(); // wait for modal to show

    wrapper.find(".btn-primary").trigger("click");
    await flushPromises();

    expect(actions.createReminder).toHaveBeenCalledWith(expect.anything(), "Reminder message");
  });
});
