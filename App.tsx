import React from 'react'
import { Text, View } from 'react-native'

import TreeView from 'react-native-final-tree-view'

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
    <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>

    <TreeView
      data={family} // defined above
      initialExpanded = {true}
      onNodePress={({node, level}) => {
        console.log(node);
        console.log(level);
      }}
      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
        return (
          <View>
            <Text
              style={{
                marginLeft: 25 * level,
              }}
            >
              {isExpanded = true}
              {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
            </Text>
          </View>
        )
      }}
      />
      </View>
  )
}
// okol
export default App