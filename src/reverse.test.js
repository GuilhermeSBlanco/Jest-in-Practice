import { expect } from 'chai'
import reverse from './reverse'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse() should return []', () => {
    expect(reverse()).to.be.deep.equal([])
})


it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1,2]) should return [2,1]', () => {
    expect(reverse([1,2])).to.be.deep.equal([2,1])
})


it('reverse(["Guilherme","Blanco"]) should return ["Blanco", "Guilherme"]', () => {
    expect(reverse(["Guilherme","Blanco"])).to.be.deep.equal(["Blanco", "Guilherme"])
})

