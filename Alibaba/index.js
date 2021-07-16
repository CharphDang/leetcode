const assert = require('power-assert')
const testResults = []
//==============================答题部分 start==============================

/********************第 1 题**********************/
// 复制数组

function duplicate(arr) {
  // let index = 0;
  // const len = arr.length;
  // while (index < len) {
  //   arr.push(arr[index]);
  //   index++;
  // }
  return arr.concat(Object.assign(arr))
}

/*******单测部分*******/
try {
  assert.deepEqual(duplicate([1, 2, 3]), [1, 2, 3, 1, 2, 3])
  assert(duplicate([]).length === 0)

  testResults[0] = '通过'
} catch {
  testResults[0] = '不通过'
}

/********************第 2 题**********************/
// 将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。要求程序具有侦测错误输入的能力
function transform(arr) {
  arr.sort((pre, next) => {
    return pre.id - next.id
  })
  let preNode = null
  let tree = []
  console.log(arr, 'new arr') // Charph-log
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index]
    if (index === 0) {
      if (item.parentId) return tree
      tree.push(item)
    } else {
      if (item.parentId === preNode.id) {
        preNode.children = [item]
      }
    }
    preNode = item
  }
  return tree
}

/*******单测部分*******/
try {
  assert.deepEqual(
    transform([
      { id: 1, name: 'i1' },
      { id: 2, name: 'i2', parentId: 1 },
      { id: 4, name: 'i4', parentId: 3 },
      { id: 3, name: 'i3', parentId: 2 }
    ]),
    [
      {
        id: 1,
        name: 'i1',
        children: [
          {
            id: 2,
            name: 'i2',
            parentId: 1,
            children: [
              {
                id: 3,
                name: 'i3',
                parentId: 2,
                children: [
                  {
                    id: 4,
                    name: 'i4',
                    parentId: 3
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  )

  assert.deepEqual(
    transform([
      { id: 1, name: 'i1' },
      { id: 2, name: 'i2', parentId: 1 },
      { id: 4, name: 'i4', parentId: 3 },
      { id: 3, name: 'i3', parentId: 2 },
      { id: 11, name: 'i11', parentId: 'UFO' }
    ]),
    [
      {
        id: 1,
        name: 'i1',
        children: [
          {
            id: 2,
            name: 'i2',
            parentId: 1,
            children: [
              {
                id: 3,
                name: 'i3',
                parentId: 2,
                children: [
                  {
                    id: 4,
                    name: 'i4',
                    parentId: 3
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  )

  assert.deepEqual(
    transform([
      { id: 1, name: 'i1', parentId: 4 },
      { id: 2, name: 'i2', parentId: 1 },
      { id: 3, name: 'i3', parentId: 2 },
      { id: 4, name: 'i4', parentId: 3 }
    ]),
    []
  )

  testResults[1] = '通过'
} catch {
  testResults[1] = '不通过'
}

/********************第 3 题**********************/
// 实现一个简单的模板引擎。

// var tpl = template('hey there {{ name }}');
// var div = document.createElement('div');
// div.innerHTML = tpl({ name: 'Neo' });
// document.body.appendChild(div);

function template(tpl) {
  return function (objVal) {
    let str = tpl
    Object.entries(objVal).forEach(([key, value]) => {
      str = str.replace(`{{ ${key} }}`, value)
    })
    return str
  }
}

try {
  assert.equal(template('hey there {{ name }}')({ name: 'Neo' }), 'hey there Neo')

  assert.equal(
    template('hey there {{ name }} {{ age }}')({ name: 'Neo', age: '11' }),
    'hey there Neo 11'
  )

  testResults[2] = '通过'
} catch {
  testResults[2] = '不通过'
}

/********************第 4 题**********************/
// 实现 onChange(obj, callback) ，当 obj 变化时（新增、删除、修改、查找），调用 callback 函数

function onChange(objToWatch, onChangeFunction) {
  Object.keys(objToWatch).forEach(key => {
    if (typeof objToWatch[key] === 'object') {
      objToWatch[key] = onChange(objToWatch[key], onChangeFunction)
    }
  })
  objToWatch = observe(objToWatch, onChangeFunction)
  return objToWatch
}

function observe(obj, onChangeFunction) {
  return new Proxy(obj, {
    get() {
      onChangeFunction()
      console.log(111) // Charph-log
      return Reflect.get(...arguments)
    },

    set() {
      onChangeFunction()
      return Reflect.set(...arguments)
    },
    deleteProperty() {
      onChangeFunction()
      return Reflect.deleteProperty(...arguments)
    }
  })
}
try {
  let counter = 0
  const logger = () => {
    counter++
  }
  const obj = { a: { b: { c: { d: 'xxoo' } } } }
  const proxy = onChange(obj, logger)

  console.log(proxy.a) // logger called here in get trap
  assert(counter === 1)

  console.log(proxy.a.b.c.d)
  assert(counter === 5)

  proxy.a = 'b' // logger called here as well in set trap
  assert(counter === 6)

  delete proxy.a // logger called here in deleteProperty trap
  assert(counter === 7)

  testResults[3] = '通过'
} catch {
  testResults[3] = '不通过'
}

/********************第 5 题**********************/
// 给定一个只包含 '(', ')', '{', '}', '[' and ']'的字符串 ，判断这个字符串是否满足下列条件：
// 1) 左括号必须用相同类型的右括号闭合。
// 2) 左括号必须以正确的顺序闭合。
// 3) 注意空字符串可被认为是有效字符串。
// 示例："()" => true, "()[]{}" => true, "(]" => false, "([)]" => false, "{[]}" => true

function isValid(str) {
  var arr = []
  var obj = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  var left = ['{', '(', '[']
  var right = ['}', ')', ']']
  for (const char of str) {
    if (left.includes(char)) {
      arr.push(char)
    } else if (right.includes(char)) {
      let index = arr.findIndex(item => item === obj[char])
      if (index > -1) {
        arr.splice(index, 1)
      } else {
        return false
      }
    }
  }
  const len = arr.filter(item => left.includes(item)).length
  return len === 0 ? true : false
}

try {
  assert(isValid(''))
  assert(isValid('()'))
  assert(isValid('()[]{}'))
  assert(isValid('(}') === false)
  assert(isValid('{[]()}'))

  testResults[4] = '通过'
} catch {
  testResults[4] = '不通过'
}

console.log(testResults) // Charph-log
