import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TreeView from 'react-native-final-tree-view';
import FinalTreeView from 'react-native-final-tree-view';
import TreeCard from './Card';
const data = [
  {
    id: 'grandparent',
    name: 'Grandparent',
    children: [
      {
        id: 'parent1',
        name: 'Parent 1',
        children: [
          {
            id: 'child1',
            name: 'Child 1',
            children: [],
          },
          {
            id: 'child2',
            name: 'Child 2',
            children: [],
          },
        ],
      },
      {
        id: 'parent2',
        name: 'Parent 2',
        children: [
          {
            id: 'child3',
            name: 'Child 3',
            children: [],
          },
          {
            id: 'child4',
            name: 'Child 4',
            children: [],
          },
        ],
      },
    ],
  },
];

const Node = ({ node }) => {
  return (
    <View style={{ backgroundColor: '#1f6eed', width: 300, height: 300, padding: 20, borderRadius: 10 }}>
      <Text style={{ color: 'white', fontSize: 20 }}>{node.name}</Text>
    </View>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isNodeExpanded = (node) => {
    return !!this.state[node.id];
  }

  toggleNode = (node) => {
    this.setState({ [node.id]: !this.isNodeExpanded(node) });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <TreeView
          data={data}
          renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ marginLeft: level * 20, marginRight: 10 }}>
                  {hasChildrenNodes && (
                    <TouchableOpacity onPress={() => this.toggleNode(node)}>
                      <Text>{isExpanded ? '-' : '+'}</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {/* <Node node={node} /> */}
                <View style={{width: 200, height: 200}}>

                {TreeCard()}
                </View>
              </View>
            );
          }}
          isNodeExpanded={this.isNodeExpanded}
        />
      </View>
    );
  }
}
