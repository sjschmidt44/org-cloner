'use strict'

const ArgParser = require('argparse').ArgumentParser

const parser = module.exports = new ArgParser({
  version: '1.0.0',
  addHelp: true,
  description: 'Useful tool for cloning the full contents of a public organization on Github into a new organization. Clones the repos locally, creates the repos in your new org, and then resets the remote locally for each repo before pushing the current content.'
})

parser.addArgument(
  ['--origin', '-O'],
  {
    help: 'Provide the full name, not including the Github Domain, of the organization that you are cloning',
    required: true,
    metavar: 'codefellows-seattle-301d21'
  })

parser.addArgument(
  ['--destination', '-D'],
  {
    help: 'Provide the full name, not including the Github Domain, of the organization that you are creating. Note: You must create this org on GH prior to completing this step',
    required: true,
    metavar: 'codefellows-seattle-301d22'
  }
)

parser.addArgument(
  ['--path', '-P'],
  {
    help: 'Provide the relative or absolute path on your machine to clone these repositories into.',
    metavar: '~/Codefellows/301/seattle-301d22 || ./seattle-301d22'
  }
)
