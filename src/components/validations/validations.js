exports.isNumber = (ele) => {
  let pattern = /^\d+$/
  return pattern.test(ele)
}

exports.acceptOnlyNumber = (ele) => {
  if (this.isNumber(ele)) {
    return ele
  } else {
    let temp = ele.substring(0, ele.length - 1)
    return temp
  }
}
exports.isEmpty = (ele) => {
  if (ele === "") {
    return true
  }
}
