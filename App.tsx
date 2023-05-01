import React from 'react'
import { Text, View } from 'react-native'

// import TreeView from 'react-native-final-tree-view'

function getIndicator(isExpanded, hasChildrenNodes) {
  isExpanded = true
  if (!hasChildrenNodes) {
    return '-'
  } else if (isExpanded) {
    return '\\/'
  } else {
    return '>'
  }
}
const family = [
  {
    id: 'Grandparent',
    name: 'Grandpa',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Me',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'Erick',
            age: 10,
          },
          {
            id: 'Rose',
            name: 'Rose',
            age: 12,
          },
        ],
      },
    ],
  },
]
function App() {
  return (
    <View></View>
  )
}
// ok
export default App