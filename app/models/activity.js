import Model    from 'ember-data/model'
import attr     from 'ember-data/attr'
import moment   from 'moment'
import computed from 'ember-computed-decorators'

import {
  belongsTo,
  hasMany
} from 'ember-data/relationships'

export default Model.extend({
  comment: attr('string', { defaultValue: '' }),
  start: attr('django-datetime', { defaultValue: () => moment() }),
  duration: attr('django-duration'),
  task: belongsTo('task'),
  user: belongsTo('user'),
  blocks: hasMany('activity-block'),

  @computed('blocks.@each.to')
  activeBlock(blocks) {
    let activeBlocks = blocks.filter((b) => !b.get('to'))

    return activeBlocks.get('length') ? activeBlocks.get('firstObject') : null
  },

  @computed('activeBlock')
  active(block) {
    return Boolean(block && block.get('from'))
  }
})
