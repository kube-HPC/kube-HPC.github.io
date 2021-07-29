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

  render() {
    const { items, selectedTabKey } = this.state;
    return (
      <Tabs transform={false} items={items} showInkBar={true} selectedTabKey={selectedTabKey} />
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