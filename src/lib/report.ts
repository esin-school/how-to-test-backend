import fetch from 'node-fetch'

/** reporting microservice API
 * url: http://reporting.local/api/report
 * method: POST
 * body: {message: string} ← use JSON.stringify
 * headers: {Accept: application/json, Content-Type: application/json}
 */

export const report = async (string: string): Promise<void> => {
  console.log(string)
}
