import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
