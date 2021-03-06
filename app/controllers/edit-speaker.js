import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveSpeaker(speaker) {

      let speakerModel = this.get('model');
      speakerModel.set('lastName', speaker.lastName);
      speakerModel.set('firstName', speaker.firstName);
      speakerModel.set('patronymic', speaker.patronymic);

      await speakerModel.save(); //уходит запрос на сервер - промис

      this.transitionToRoute('speakers');
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
