import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | users/edit', function() {
  setupTest('route:users/edit', {
    // Specify the other units that are required for this test.
    needs: ['service:can']
  })

  it('exists', function() {
    let route = this.subject()
    expect(route).to.be.ok
  })
})
