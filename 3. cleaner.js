const objValues = { a: 1, b: null, c: undefined }

function objCleaner(objValues) {
  return Object.fromEntries(
    Object.entries(objValues)
      .filter(([key, value]) => value != null)
      .map(([key, value]) => (typeof value === "object"
        ? [key, removeEmpty(value)]
        : [key, value]))
  )
}

console.log(objCleaner(objValues))