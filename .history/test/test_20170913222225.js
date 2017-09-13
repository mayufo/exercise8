const assert = require('assert')
const css = require('../lib/css')
const fs = require('fs')
const path = require('path')
// 匹配不是冒号的字符
describe('css parser', function () {
  it('可以匹配出rule', function () {
    const res = css(
      fs.readFileSync(
        path.resolve(__dirname, './source/rule.css'),
        'utf-8'
      )
    )
    const expect = require('./expect/rule')
    assert.deepEqual(
      res,
      expect
    )
  })
// 匹配不是冒号的字符
  it('可以匹配各种选择器', function () {
    const res = css(
      fs.readFileSync(
        path.resolve(__dirname, './source/selectors.css'),
        'utf-8'
      )
    )
    const expect = require('./expect/selectors')
    assert.deepEqual(
      res,
      expect
    )
  })

  it('可以匹配键值对', function () {
    const res = css(
      fs.readFileSync(
        path.resolve(__dirname, './source/kv.css'),
        'utf-8'
      )
    )
    const expect = require('./expect/kv')
    assert.deepEqual(
      res,
      expect
    )
  })
})