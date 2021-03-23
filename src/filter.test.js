import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
    expect(filter).to.be.a('function')
})

it('filter() should return []', () => {
    expect(filter()).to.be.deep.equal([])
})

it('filter([1,2], item => item should return [1,2]', () => {
    expect(filter([1,2], item => item)).to.be.deep.equal([1,2])
})

it('filter([0,1,2], item => item should return [0,1,2]', () => {
    expect(filter([0,1,2], item => item)).to.be.deep.equal([1,2])
})

it('filter([1,2,3], item => item < 2 should return [1]', () => {
    expect(filter([1,2,3], item => item < 2)).to.be.deep.equal([1])
})

it('filter([1,2], (item, index, array) => array should return [[1,2], [1,2]]', () => {
    expect(filter([1,2], (item, index, array) => array)).to.be.deep.equal([1,2])
})

