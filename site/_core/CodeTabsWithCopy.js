import React from 'react';
import Tabs from 'react-responsive-tabs';

export default class CodeTabsWithCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this._getTabs(),
      selectedTabKey: 0,
      copied: false
    };

    // bind event handlers here
    this.onTabChange = this.onTabChange.bind(this);
    this.copyCode = this.copyCode.bind(this);
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

  onTabChange(index) {
    this.setState({ selectedTabKey: index, copied: false });
  }

  copyCode() {
    const { selectedTabKey, items } = this.state;
    const codeNode = items[selectedTabKey].getContent();

    let textToCopy = '';

    try {
      if (
        codeNode &&
        codeNode.props &&
        codeNode.props.children &&
        codeNode.props.children.props &&
        typeof codeNode.props.children.props.children === 'string'
      ) {
        textToCopy = codeNode.props.children.props.children;
      } else if (
        codeNode &&
        codeNode.props &&
        typeof codeNode.props.children === 'string'
      ) {
        textToCopy = codeNode.props.children;
      }
    } catch (e) {
      textToCopy = '';
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    }
  }

  render() {
    const { items, selectedTabKey, copied } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <Tabs
          transform={false}
          items={items}
          showInkBar={true}
          selectedTabKey={selectedTabKey}
          onChange={this.onTabChange}
        />
        <button
          onClick={this.copyCode}
          className="copy-btn"
          style={{ top: '62px' }}
          aria-label="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  }
}
