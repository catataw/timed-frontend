import { Ability } from 'ember-can'
import computed from 'ember-computed-decorators'
import { get } from '@ember/object'

export default Ability.extend({
  @computed(
    'user.{id,isSuperuser}',
    'model.{user.id,user.supervisors,task.project.reviewers,verifiedBy}'
  )
  canEdit(
    currentUserId = null,
    isSuperuser = false,
    userId = null,
    supervisors = [],
    reviewers = [],
    verifiedBy = null
  ) {
    return (
      isSuperuser ||
      (!(verifiedBy && get(verifiedBy, 'id')) &&
        (userId === currentUserId ||
          supervisors.mapBy('id').includes(currentUserId) ||
          reviewers.mapBy('id').includes(currentUserId)))
    )
  }
})
