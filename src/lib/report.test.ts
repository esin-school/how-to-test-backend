import { report } from './report'
import fetch from 'node-fetch'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn())

describe('report', () => {
  let spyFetch: any
  const expectedResponse = { test: 'TEST' }

  beforeAll(() => {
    spyFetch = fetch as jest.MockedFunction<typeof fetch>
    spyFetch.mockImplementation(() => Promise.resolve(expectedResponse))
  })

  afterEach(() => {
    spyFetch.mockClear()
  })

  it('calls the report api', async () => {
    expect(spyFetch.mock.calls.length).toBe(0)
    await report('test')
    expect(spyFetch.mock.calls.length).toBe(1)
  })
})
