import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | sy modal/header', function() {
  setupComponentTest('sy-modal/header', {
    integration: true
  })

  it('renders', function() {
    this.set('visible', true)

    this.render(
      hbs`{{#sy-modal/header close=(action (mut visible) false)}}Test{{/sy-modal/header}}`
    )

    expect(
      this.$()
        .text()
        .trim()
    ).to.contain('Test')
    expect(
      this.$()
        .text()
        .trim()
    ).to.contain('×')
  })

  it('closes on click of the close icon', function() {
    this.set('visible', true)

    this.render(
      hbs`{{#sy-modal/header close=(action (mut visible) false)}}Test{{/sy-modal/header}}`
    )

    expect(this.get('visible')).to.be.ok

    this.$('button').click()

    expect(this.get('visible')).to.not.be.ok
  })
})
