
async function withFetch() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()

  return json
}

describe('withFetch', () => {
  test('get all posts', async () => {
    const json = await withFetch()
    expect(Array.isArray(json)).toEqual(true)
    expect(json.length).toEqual(100)
  })
})