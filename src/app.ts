const array1 = [12, 232, 2323, 232, 232, 232, 232, '22', '22', '22df', '22df']
const array2 = [12, 232, 232, 323, 323, '22', '22', 323, '22df']

/**
 * @class arrayUtil [array no double]
 */
class arrayUtil {
  /** 双循环 */
  static loopDouble(sourArr: any[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }
    const res = []

    for (let i of sourArr) {
      let flag = true
      for (let j of res) {
        if (sourArr[i] === res[j]) {
          flag = false
        }
        break
      }
      if (flag) {
        res.push(sourArr[i])
      }
    }
    return res
  }

  /** 通过indexOf 1 */
  static indexOfNoDouble1(sourArr: any[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    const res = []

    for (let j of sourArr) {
      if (res.indexOf(sourArr[j]) === -1) {
        res.push(sourArr[j])
      }
    }

    return res
  }

  /** 通过indexOf 2 */

  static indexOfNoDouble2(sourArr: any[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    return sourArr.filter((item, index) => {
      return sourArr.indexOf(item) === index
    })
  }

  /** 相邻元素去重 */
  static sortIndex(sourArr: any[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    const news = sourArr
      .map(r => String.toString.apply(r))
      .sort() /** 转成春字符串 */
    const res = []

    for (const i of news) {
      if (news[i] !== news[i + 1]) {
        res.push(news[i])
      }
    }
    return res
  }

  /** 利用对象属性去重 */

  static noObj(sourArr: any[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    const obj: {
      [index: string]: any
    } = {}
    const target = []

    for (const i of sourArr) {
      if (!obj[sourArr[i]]) {
        target.push(sourArr[i])
        obj[sourArr[i]] = 1
      }
    }
    return target
  }

  /** set 结结构赋值 */
  static set1(sourArr: string[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    return Array.from(new Set(sourArr))
  }

  /** set 结结构赋值 */
  static set2(sourArr: string[]) {
    if (!Array.isArray(sourArr)) {
      return console.error('array is non correct!!!')
    }

    const uu = new Set(sourArr)
  }
}

console.dir(arrayUtil)
