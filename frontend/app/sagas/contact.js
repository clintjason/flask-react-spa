import { call, put, takeLatest } from 'redux-saga/effects'

import { flashSuccess } from 'actions/flash'
import { contact } from 'actions/contact'
import { createRoutineFormSaga } from 'sagas'
import SiteApi from 'api/site'


export const contactSaga = createRoutineFormSaga(
  contact,
  function *successGenerator(payload) {
    const response = yield call(SiteApi.contact, payload)
    yield put(contact.success(response))
    yield put(flashSuccess('Your contact submission has been sent. We will do our best to respond in a timely manner!'))
  }
)

export default () => [
  takeLatest(contact.TRIGGER, contactSaga)
]