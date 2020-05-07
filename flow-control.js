function basicTeenager(age) {
  if (age < 18 === true && age > 12 === true) {
    return 'You are a teenager!'
  }
}

function teenager(age) {
  if (age < 18 === true && age > 12 === true) {
    return 'You are a teenager!'
  } else {
     return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age < 18 === true && age > 12 === true) {
    return 'You are a teenager!'
  } else if (age < 13) {
     return'You are a kid'
  } else {
    return'You are a grownup'
  }

}

function ternaryTeenager(age) {
  if (age < 18 === true && age > 12 === true) {
    return 'You are a teenager'
  } else {
    return 'You are not a teenager'
  }

}

function switchAge(age) {
  switch (age) {
    case (13, 14, 15, 16, 17, 18, 19):
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
