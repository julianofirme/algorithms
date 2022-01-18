const members = [
  { itsMe: false, admin: false, name: 'joão' },
  { itsMe: false, admin: true, name: 'henri' },
  { itsMe: false, admin: false, name: 'adriano' },
  { itsMe: true, admin: true, name: 'juliano' }
]

function classifyMembers(members) {
  return members.sort((x, y) => {
    if (x.itsMe > y.itsMe || x.admin > y.admin) {
      return -1
    } else {
      return true
    }
  })
}

console.log(classifyMembers(members))