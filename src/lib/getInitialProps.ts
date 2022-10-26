type HostProps = { host: string | null }

export const createGetInititalProps = async () => {
  // @ts-ignore
  return ({ req }) => {
    let host
    if (req) {
      // Server side rendering
      host = req.protocol + '://' + req.get('host') + req.originalUrl
    } else {
      // Client side rendering
      console.log('aaa')
      host =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '')
    }
    return { host }
  }
}
