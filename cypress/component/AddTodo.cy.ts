import AddTodo from '../../src/components/AddTodo'

describe('AddTodo.cy.ts', () => {
  it('mounts', () => {
    cy.mount(AddTodo)
  })
})