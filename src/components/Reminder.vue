<template>
  <div>
    <b-button v-b-modal.modal-reminder size="sm" class="ml-1">Reminder</b-button>

    <b-modal id="modal-reminder" ref="modal" title="Reminder" ok-title="Save" @ok="submit">
      <b-form-group id="message-group" label="Message" label-for="epr-message" label-cols-md="3">
        <b-form-textarea v-model="message" id="message" name="message" type="text"/>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Reminder",
  data: function () {
    return {
      message: ""
    }
  },
  methods: {
    ...mapActions([ "createReminder" ]),
    
    submit: function() {
      this.createReminder(this.message)
    }
  }
};
</script>