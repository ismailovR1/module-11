import { getPercents } from "./js/script.js"

describe ('getPercents function test', () => {
    it ('getPercents function test', () => {
        expect(getPercents(30, 200)).toBe(60)
    })
})

import { getMonth } from "./js/script.js"

describe ('getMonth function test', () => {
    it ('test the getMonth function for correctness', () => {
        expect(getMonth(2)).toBe('февраль')
    })
    it ('test the getMonth function for an unknown value', () => {
        expect(getMonth(13)).toBe('неизвестно')
    })
})

import { reverseString } from "./js/script.js"

describe ('reverseString function test', () => {
    it ('test the reverseString function for correctness', () => {
        expect(reverseString('когда')).toBe('адгок')
    })
})