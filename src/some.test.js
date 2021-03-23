import { expect } from 'chai'
import some from './some'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it('some([], item => item should return false)', () => {
    expect(some([], item => item)).to.be.not.ok
})

it('some([0,1,2], item => item should return true)', () => {
    expect(some([0,1,2], item => item)).to.be.ok
})

it('some([1,2,3], item => !item should return false', () => {
    expect(some([1,2,3], item => !item)).to.be.not.ok
})

it('some([1,2,3], (item, index) => index === item -1 should return true)', () => {
    expect(some([1,2,3], (item, index) => index === item - 1)).to.be.ok
})

it('some([1,2,3], (item, index, array) => array.length === 3 should return true)', () => {
    expect(some([1,2,3], (item, index, array) => array.length === 3)).to.be.ok
})