/** @jsx React.DOM */;
var MarkdownPreviewer, SHOWDOWN_CONVERTER;

require("script!../../../bower_components/showdown/compressed/showdown.js");

SHOWDOWN_CONVERTER = new Showdown.converter();

MarkdownPreviewer = React.createClass({
  render: function() {
    var html;
    html = SHOWDOWN_CONVERTER.makeHtml(this.props.block.data.text);
    return React.DOM.div( {dangerouslySetInnerHTML:{__html: html}});
  }
});

module.exports = MarkdownPreviewer;