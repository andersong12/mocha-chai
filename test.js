import { suite_status, get_all_suites  } from './tests/specs/suite/suite_get.spec.js'

context('Test general', () => {
    suite_status()
    get_all_suites()
})