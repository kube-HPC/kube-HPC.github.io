import React from 'react';
import Tabs from 'react-responsive-tabs';

module.exports = class CodeTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this._getTabs(),
      selectedTabKey: 0
    };
  }

  componentDidMount() {
    this.setState({ items: this._getTabs() });
  }

  _change() {
    // this.setState({ items: this._getTabs() });
    console.log('change')

  }

  render() {
    const { items, selectedTabKey } = this.state;
    return (
      <Tabs items={items} showInkBar={true} onChange={this._change()} selectedTabKey={selectedTabKey} />
    );
  }

  _getTabs() {
    return this.props.schema.map((s, i) => ({
      key: i,
      tabClassName: 'tab',
      panelClassName: 'panel',
      title: s.name,
      getContent: () => s.content
    }));
  }
}

// function getTabs(schema) {
//   return schema.map((s, i) => ({
//     key: i,
//     tabClassName: 'tab',
//     panelClassName: 'panel',
//     title: s.name,
//     getContent: () => s.content,
//     showInkBar: true
//   }));
// }

// export default ({ schema }) =>
//   <Tabs items={getTabs(schema)} />