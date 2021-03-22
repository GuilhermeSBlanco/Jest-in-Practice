import { expect } from 'chai'
import map from './map'

it('Map should be a function', () => {
    expect(map).to.be.a('function')
})

it('Map() should return []', () => {
    expect(map()).to.be.deep.equal([])
})

it('Map([1,2], item => item should return [1,2]', () => {
    expect(map([1,2], item => item)).to.be.deep.equal([1,2])
})

it('Map([1,2], item => item + 1 should return [2,3]', () => {
    expect(map([1,2], item => item + 1)).to.be.deep.equal([2,3])
})

it('Map([1,2], (item, index) => index should return [0,1]', () => {
    expect(map([1,2], (item, index) => index)).to.be.deep.equal([0,1])
})

it('Map([1,2], (item, index, array) => array should return [[1,2], [1,2]]', () => {
    expect(map([1,2], (item, index, array) => array)).to.be.deep.equal([[1,2], [1,2]])
})

