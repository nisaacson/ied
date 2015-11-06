/* global describe it beforeEach */

var proxyquire = require('proxyquire')
var assert = require('assert')
var mock = require('mockmock')

describe('install', function () {
  var forceSymlink
  var resolve
  var download
  var ignoreError
  var install
  var cb

  beforeEach(function () {
    forceSymlink = mock()
    resolve = mock()
    download = mock()
    ignoreError = mock()
    cb = mock()

    install = proxyquire('../lib/install', {
      './force_symlink': forceSymlink,
      './resolve': resolve,
      './download': download,
      './ignore_error': ignoreError
    })
  })

  it('should resolve correct package', function () {
    install('/somewhere/', 'name', '~1.0.0', false, cb)
    assert.deepEqual(resolve.args[0].slice(0, 2), ['name', '~1.0.0'])
  })
})
