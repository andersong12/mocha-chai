import { get_all_suites, get_suite_by_id  } from './tests/specs/suite/suite_get.spec.js'

context('Test general', () => {
    get_all_suites()
    get_suite_by_id()
})