const plugin = { 
  name: 'Iframe Embed', 
  transforms: [
    {
      name: 'transform-iframe-height',
      doc: 'Transforms iframe height to 130%',
      stage: 'document',
      plugin: (_, utils) => (node) => {
        utils.selectAll('iframe', node).forEach((iframeNode) => {
          if (!iframeNode.style) iframeNode.style = '';
          iframeNode.style += ' height: 130%;';
        });
      },
    },
  ]
};

export default plugin;