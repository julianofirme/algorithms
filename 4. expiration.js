function passedTheExpirationDate(initalDate, expiration) {
  const currentDate = new Date
  const date = new Date(initalDate)
  const expirationDate = date.setDate(date.getDate() + expiration)

  return expirationDate > currentDate
    ? true
    : false
}

console.log(passedTheExpirationDate('2022-01-01T00:00:00.000Z', 10)) 