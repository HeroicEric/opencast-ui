import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return `Podcast #${i}`; }
});
